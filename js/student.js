function loadCompanies(){

 let student = JSON.parse(localStorage.getItem("student"));

 let companies = JSON.parse(localStorage.getItem("companies")) || [];

 let box = document.getElementById("companyList");

 box.innerHTML="";

 companies.forEach((company,index)=>{

   let eligible = false;

let studentCgpa = parseFloat(student.cgpa);
let companyCgpa = parseFloat(company.cgpa);

let studentBranch = student.branch.trim().toLowerCase();
let companyBranch = company.branch.trim().toLowerCase();

if (
   studentBranch === companyBranch &&
   studentCgpa >= companyCgpa
){
   eligible = true;
}

   box.innerHTML += `

   <div class="card">

   <h2>${company.name}</h2>

   <p>Role : ${company.role}</p>

   <p>Package : ${company.package} LPA</p>

   <p>Required Branch : ${company.branch}</p>

   <p>Minimum CGPA : ${company.cgpa}</p>

   <p>Rules : ${company.rules}</p>

   <p>Status :
      ${eligible ? "Eligible ✅" : "Not Eligible ❌"}
   </p>

   ${
     eligible
     ?
     `<button onclick="applyCompany(${index})">Apply</button>`
     :
     ""
   }

   </div>
   `;
 });
}

function applyCompany(index){

 let student =
 JSON.parse(localStorage.getItem("student"));

 let companies =
 JSON.parse(localStorage.getItem("companies")) || [];

 let applications =
 JSON.parse(localStorage.getItem("applications")) || [];

 let selectedCompany = companies[index];

 if(!selectedCompany){
    alert("Company not found");
    return;
 }

 applications.push({

   studentName: student.name,

   studentEmail: student.email,

   company: selectedCompany.name,

   status: "Pending"
 });

 localStorage.setItem(
   "applications",
   JSON.stringify(applications)
 );

 alert("Applied Successfully");
}

loadCompanies();

function uploadResume(){

 let file =
 document.getElementById("resume").value;

 if(file === ""){

   alert("Please Select Resume");

   return;
 }

 localStorage.setItem("resume", file);

 alert("Resume Uploaded Successfully");
}

function searchCompany(){

 let search =
 document.getElementById("searchBox")
 .value
 .toLowerCase();

 let companies =
 JSON.parse(localStorage.getItem("companies")) || [];

 let box =
 document.getElementById("companyList");

 box.innerHTML = "";

 companies.forEach((company,index)=>{

   if(company.name.toLowerCase().includes(search)){

      box.innerHTML += `

      <div class="card">

      <h2>${company.name}</h2>

      <p>${company.role}</p>

      <p>${company.package} LPA</p>

      </div>
      `;
   }
 });
}
function loadMyApplications(){

 let student =
 JSON.parse(localStorage.getItem("student"));

 let apps =
 JSON.parse(localStorage.getItem("applications")) || [];

 let box =
 document.getElementById("myApplications");

 if(!box) return;

 box.innerHTML = "";

 apps.forEach(app=>{

   if(app.studentEmail === student.email){

      box.innerHTML += `

      <div class="card">

      <h3>${app.company}</h3>

      <p>Status :
      ${app.status || "Pending"}
      </p>

      </div>
      `;
   }
 });
}

loadMyApplications();