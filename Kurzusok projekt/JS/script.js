const url = "https://vvri.pythonanywhere.com/api/courses";
var coursesDIV = document.getElementById("courses");
var ki = "";

let courses = [];
// Function to fetch data and draw courses
function fetchDataAndDrawCourses() {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      courses = data;

      // Function to draw courses
      function drawCourses() {
        // Iterate through the courses array and log each course name to the console
        courses.forEach(course => {
          ki += `<div id="button" class="button-style" style="background-color: ${getRandomColor()};"><sblack class="course-name">${course.name}</span></div>`
        });

        coursesDIV.innerHTML += ki;

        // Log the length of the courses array
        console.log('Number of courses:', courses.length);
      }

      // Call the drawCourses function
      drawCourses();
    })
    .catch(error => console.error('Error fetching data:', error));
}

// Call the fetchDataAndDrawCourses function initially
fetchDataAndDrawCourses();


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

// Add a new button element to the HTML file
var newCourseButton = document.createElement("button");
newCourseButton.innerHTML = "Add New Course";
newCourseButton.id = "newCourseButton";
newCourseButton.addEventListener("click", function() {
  // Get the input field for the new course name
  var newCourseInput = document.createElement("input");
  newCourseInput.type = "text";
  newCourseInput.placeholder = "Enter course name";
  // Append the input field to the HTML file
  coursesDIV.appendChild(newCourseInput);
  // Add a submit button to the HTML file
  var submitButton = document.createElement("button");
  submitButton.innerHTML = "Submit";
  submitButton.id = "submitButton";
  submitButton.addEventListener("click", function() {
    // Get the new course name from the input field
    var newCourseName = newCourseInput.value;
    // Fetch the API to create a new course
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: newCourseName
      })
    })
    .then(response => response.json())
    .then(data => {
      // Update the courses array with the new course
      courses.push(data);
      // Call the function to draw the updated courses
      drawCourses();
      // Clear the input field
      newCourseInput.value = '';
    })
    .catch(error => console.error('Error creating new course:', error));
  });
  // Append the submit button to the HTML file
  coursesDIV.appendChild(submitButton);
});
// Append the new button to the HTML file
coursesDIV.appendChild(newCourseButton);