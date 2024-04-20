const coursesDIV = document.getElementById("coursesDIV");
let courses = [];
let students = [];
let currentCourse = 0;

const fetchDataAndDrawCourses = () => {
  fetch("https://vvri.pythonanywhere.com/api/courses")
    .then((response) => response.json())
    .then((data) => {
      courses = data;
      coursesDIV.innerHTML = courses
        .map(
          (course) =>
            `<div id="button" class="button-style" onclick="showEditModal(this)" data-id=${course.id}><span class="course-name">${course.name}</span></div>`
        )
        .join("");
    })
    .catch((error) => console.error("Error fetching data:", error));
};

const showEditModal = (courseDiv) => {
  closeModal('modal');
  students = [];
  const modal = document.getElementById("editModal");
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
            `<tr><td>${student.name}</td><td><span class="delete-button" onclick="deleteStudent(this)" data-sid="${student.id}">&#128465;</span></td></tr>`
        )
        .join("");
    });
    document.getElementById("NameInput").value = "";
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
          const newRow = `<tr><td>${data.name}</td><td><span class="delete-button" onclick="deleteStudent(this)" data-sid="${data.id}">&#128465;</span></td></tr>`;
          document.getElementById("studentList").innerHTML += newRow;
        })
        .catch((error) => console.error("Error:", error));
      studentNameError.innerText = "";
    } else {
      studentNameError.innerText = "This student already exists in the course.";
    }
  } else {
    studentNameError.innerText = "";
  }
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
        console.log("Course posted successfully:", data, data.id);
        fetchDataAndDrawCourses();
      })
      .catch((error) => console.error("Error posting course:", error));
  } else {
    document
      .getElementById("courseNameInput")
      .parentNode.querySelector(".error").innerText =
      "This course name already exists.";
  }
  closeModal();
};

fetchDataAndDrawCourses();