//Feladat:1. Tömb destruktúrálása


let car = ['Ford', 'Mustang', 2022, 'blue'];

let [brand, model, year, color] = car

console.log("Brand: " + brand)
console.log("Model: " + model)
console.log("Year: " + year)
console.log("Color : " + color)

//Milyen változóneveket lehet használni tömb esetén destrukturálás esetén?
// Olyat ami utal a tárolt adatra, de igazából bármi lehet

//A változók sorrendje fontos-e?
// Igen

/////////////////////////////////////////////////////////////////////////

//Feladat 2. Objektum destruktúrálása
let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'
};

let {title: bookTitle, author: bookAuthor, publicationYear, language } = book;

console.log("Title: " + bookTitle)
console.log("Author: " + bookAuthor)
console.log("Publication Year: " + publicationYear)
console.log("Language: " + language)

//Milyen változóneveket lehet használni objektum esetén destrukturálás esetén?
// Olyan valtozonevet amit tartalmaz az object is 

//A változók sorrendje fontos-e?
// Nem 

/////////////////////////////////////////////////////////////////////////

//Feladat   3. Függvény destruktúrálása

let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
};


function printStudentInfo({ name, age, grade, subjects }) {
    console.log("Name: " + name)
    console.log("Age: " + age)
    console.log("Grade: " + grade)
    console.log("Subjects: " + subjects)
}

printStudentInfo(student);