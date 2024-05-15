const coursesDIV = document.getElementById("coursesDIV");
let courses = [];
let students = [];
let currentCourse = 0;

const fetchDataAndDrawCourses = () => {
  fetch("https://vvri.pythonanywhere.com/api/courses")
    .then((response) => response.json())
    .then((data) => {
      courses = data;
      drawCourses(courses);
    })
    .catch((error) => console.error("Error fetching data:", error));
};

const drawCourses = (coursesToDraw) => {
  coursesDIV.innerHTML = coursesToDraw
    .map(
      (course) =>
        `<div id="button" class="button-style" onclick="showEditModal(this)" data-id=${course.id} data-name=${course.name}><span class="course-name">${course.name}</span></div>`
    )
    .join("");
};

const searchCourses = (query) => {
  closeModal("modal");
  closeModal("editModal");
  const lowerCaseQuery = query.toLowerCase();
  const filteredCourses = courses.filter((course) => {
    const courseNameMatch = "";
    try{
     courseNameMatch = course.name.toLowerCase().includes(lowerCaseQuery);}
    catch{}

    const studentNameMatch = course.students.some(student =>
      student.name.toLowerCase().includes(lowerCaseQuery)
    );

    return courseNameMatch || studentNameMatch;
  });

  drawCourses(filteredCourses);
};

const showEditModal = (courseDiv) => {
  closeModal('modal');
  students = [];
  const modal = document.getElementById("editModal");
  document.getElementById("modalTitle").innerHTML = `${courseDiv.dataset.name} kurzus szerkesztése`;
  modal.style.display = "flex";
  currentCourse = courseDiv.dataset.id;
  document.getElementById("studentList").innerHTML = "";
  fetch(`https://vvri.pythonanywhere.com/api/courses/${currentCourse}`)
    .then((response) => response.json())
    .then((data) => {
      students = data.students;
      document.getElementById("studentList").innerHTML = students
        .map(
          (student) =>
            `<tr><td id="name">${student.name}</td><td id="buttons"><div><span class="edit-button" onclick="editStudentName(this, '${student.name}', ${student.id})" data-sid="${student.id}">✎</span><span class="delete-button" onclick="deleteStudent(this)" data-sid="${student.id}">&#128465;</span></div></td></tr>`
        )
        .join("");
    });
  document.getElementById("NameInput").value = "";
};

const showModal = () => {
  closeModal('editModal')
  document.getElementById("submitButton").disabled = false;
  document.getElementById("courseNameERROR").innerText = "";
  document.getElementById("courseNameInput").value = "";
  document
    .getElementById("courseNameInput")
    .parentNode.querySelector(".error").innerText = "";
  document.getElementById("modal").style.display = "flex";
};

const closeModal = modalId => document.getElementById(modalId).style.display = 'none';

const submitCourse = () => {
  const courseName = document.getElementById("courseNameInput").value.trim();
  if (courseName && !courses.some((course) => course.name === courseName)) {
    fetch("https://vvri.pythonanywhere.com/api/courses", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: courseName }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Course postolva:", data, data.id);
        fetchDataAndDrawCourses();
        closeModal("modal");
      })
      .catch((error) => console.error("Error posting course:", error));
  } else {
    document
      .getElementById("courseNameInput")
      .parentNode.querySelector(".error").innerText =
      "Ilyen kurzus már létezik";
  }
};

const editStudentName = (editButton, originalName, studentId) => {
  const studentRow = editButton.closest("tr");
  const nameCell = studentRow.querySelector("td:first-child");

  const currentName = nameCell.textContent.trim();
  const inputField = document.createElement("input");
  inputField.type = "text";
  inputField.value = originalName;

  const submitButton = document.createElement("button");
  submitButton.textContent = "✔";

  submitButton.addEventListener("click", () => {
    const newName = inputField.value.trim();



    nameCell.textContent = newName;



    fetch(`https://vvri.pythonanywhere.com/api/students/${studentId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: newName,
        course_id: currentCourse
      }),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to update student name.");
        }
        console.log("Student sikeresen hozzáadva.");
      })
      .catch(error => {
        console.error("Error updating student name:", error);

      });


    inputField.remove();
    submitButton.remove();
  });


  nameCell.textContent = "";
  nameCell.appendChild(inputField);
  nameCell.appendChild(submitButton);
};

const deleteStudent = (button) => {
  const studentId = button.dataset.sid;
  fetch(`https://vvri.pythonanywhere.com/api/students/${studentId}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
  })
    .then((response) =>
      response.ok
        ? button.closest("tr").remove()
        : Promise.reject("Failed to delete student.")
    )
    .then(fetchDataAndDrawCourses)
    .catch((error) => console.error("Error deleting student:", error));
};

const addStudent = () => {
  const studentName = document.getElementById("NameInput").value.trim();
  const studentNameError = document.getElementById("studentNameERROR");

  if (studentName) {
    const isDuplicateStudent = students.some(
      (student) => student.name === studentName
    );
    if (!isDuplicateStudent) {
      students.push(studentName);
      fetch("https://vvri.pythonanywhere.com/api/students", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: studentName, course_id: currentCourse }),
      })
        .then((response) => response.json())
        .then((data) => {
          const newRow = `<tr><td id="name">${data.name}</td><td id="buttons"><div><span class="edit-button" onclick="editStudentName(this, '${data.name}', ${data.id})" data-sid="${data.id}">✎</span><span class="delete-button" onclick="deleteStudent(this)" data-sid="${data.id}">&#128465;</span></div></td></tr>`;
          document.getElementById("studentList").innerHTML += newRow;
          fetchDataAndDrawCourses();
        })
        .catch((error) => console.error("Error:", error));
      studentNameError.innerText = "";
    } else {
      studentNameError.innerText = "Ez a diák már létezik";
    }
  } else {
    studentNameError.innerText = "";
  }
};

fetchDataAndDrawCourses();