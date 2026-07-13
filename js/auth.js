// ======================
// STUDENT REGISTER
// ======================

function registerStudent(){

 let student = {

   name: document.getElementById("name").value,

   email: document.getElementById("email").value,

   branch: document.getElementById("branch").value,

   cgpa: document.getElementById("cgpa").value,

   password: document.getElementById("password").value
 };

 localStorage.setItem(
   "student",
   JSON.stringify(student)
 );

 alert("Student Registered Successfully");

 window.location.href = "student-login.html";
}



// ======================
// STUDENT LOGIN
// ======================

function loginStudent(){

 let email =
 document.getElementById("email").value;

 let password =
 document.getElementById("password").value;

 let student =
 JSON.parse(localStorage.getItem("student"));

 if(
    student &&
    student.email === email &&
    student.password === password
 ){

    alert("Student Login Success");

    // GO TO STUDENT DASHBOARD
    window.location.href = "student-dashboard.html";
 }

 else{

    alert("Wrong Email or Password");
 }
}



// ======================
// TEACHER LOGIN
// ======================

function loginAdmin(){

 let email =
 document.getElementById("adminEmail").value;

 let password =
 document.getElementById("adminPassword").value;


 if(
    email === "admin@college.com" &&
    password === "admin123"
 ){

    alert("Teacher Login Success");

    // GO TO TEACHER DASHBOARD
    window.location.href = "admin-dashboard.html";
 }

 else{

    alert("Invalid Teacher Login");
 }
}