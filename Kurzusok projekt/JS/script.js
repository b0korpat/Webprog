
const coursesDIV = document.getElementById("coursesDIV");
let courses = [];
let students = [];
var currentCourse = 0;

function fetchDataAndDrawCourses() {
  fetch("https://vvri.pythonanywhere.com/api/courses")
    .then(response => response.json())
    .then(data => {
      courses = data;
      let ki = "";
      courses.forEach(course => {
        ki += `<div id="button" class="button-style" onclick="showEditModal(this)" data-id=${course.id} )}"><span class="course-name">${course.name}</span></div>`;
      });
      coursesDIV.innerHTML = ki;
    })
    .catch(error => console.error('Error fetching data:', error));
}
fetchDataAndDrawCourses();



function showEditModal(courseDiv) {
  students = [];

  const modal = document.getElementById('editModal');
  modal.style.display = 'flex';

  console.log(courseDiv.getAttribute('data-id'));
  currentCourse = courseDiv.getAttribute('data-id')

  document.getElementById('studentList').innerHTML = '';


  fetch(`https://vvri.pythonanywhere.com/api/courses/${currentCourse}`)
    .then(response => response.json())
    .then(data => {
      console.log(data.students);
      students = data.students;
      console.log(students);

      const studentTable = document.getElementById('studentList');
      studentTable.innerHTML = '';

      students.forEach(student => {
        const newRow = `<tr><td>${student.name}</td><td><button onclick="deleteStudent(this)" data-sid="${student.id}">Delete</button></td></tr>`;
        studentTable.innerHTML += newRow;
      });
    })

};


function deleteStudent(button) {
  const studentId = button.dataset.sid;

  fetch(`https://vvri.pythonanywhere.com/api/students/${studentId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  })
    .then(response => {
      if (response.ok) {
        console.log(`Student deleted successfully.`);
        const row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
        fetchDataAndDrawCourses();
      } else {
        throw new Error('Failed to delete student.');
      }
    })
    .catch(error => {
      console.error('Error deleting student:', error);
    });
}
function closeEditModal() {
  const modal = document.getElementById('editModal');
  modal.style.display = 'none';
}

function addStudent() {
  const studentName = document.getElementById('NameInput').value;
  console.log(studentName);

  if (studentName) {
    let isDuplicateStudent = false;
    const rows = document.getElementById('studentList').getElementsByTagName('tr');
    for (let i = 0; i < rows.length; i++) {
      const cell = rows[i].getElementsByTagName('td')[0];
      if (cell && cell.innerText === studentName || studentName == "" || studentName == null || studentName == undefined || studentName == " ") {
        isDuplicateStudent = true;
        break;
      }
    }
    if (isDuplicateStudent) {
      document.getElementById('NameInput').parentNode.querySelector('.error').innerText = 'This student name already exists in the table.';
      document.getElementById('submitButton').disabled = false;
    } else {
      students.push(studentName)
      const newRow = `<tr><td>${studentName}</td><td><button onclick="deleteStudent(this)">Delete</button></td></tr>`;
      document.getElementById('studentList').innerHTML += newRow;
      document.getElementById('submitButton').disabled = false;
      document.getElementById('studentNameERROR').innerText = '';

      fetch('https://vvri.pythonanywhere.com/api/students', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: document.getElementById('NameInput').value,
          course_id: currentCourse
        })
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
    };

  }
};

function showModal() {
  document.getElementById('submitButton').disabled = false;
  document.getElementById('courseNameERROR').innerText = '';
  document.getElementById('courseNameInput').value = '';
  document.getElementById('courseNameInput').parentNode.querySelector('.error').innerText = '';
  document.getElementById('modal').style.display = 'flex';
  const modal = document.getElementById('modal');
  modal.style.display = 'flex';
}
function closeModal() {

  const modal = document.getElementById('modal');
  modal.style.display = 'none';
} function submitCourse() {
  const courseName = document.getElementById('courseNameInput').value;
  //validate
  let isDuplicateCourse = false;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].name === courseName || courseName == "" || courseName == null || courseName == undefined || courseName == " ") {
      isDuplicateCourse = true;
      break;
    }
  }
  if (isDuplicateCourse) {
    document.getElementById('courseNameInput').parentNode.querySelector('.error').innerText = 'This course name already exists.';
    return;
  } else {
    document.getElementById('courseNameERROR').innerText = '';
  }


  // Post the course
  fetch("https://vvri.pythonanywhere.com/api/courses", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: courseName
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log('Course posted successfully:', data, data.id);
      fetchDataAndDrawCourses();
    })
    .catch(error => console.error('Error posting course:', error));

  courses = [];
  closeModal();
}
