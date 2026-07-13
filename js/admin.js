function addCompany(){

 let company = {

   name: document.getElementById("companyName").value,

   role: document.getElementById("role").value,

   package: document.getElementById("package").value,

   branch: document.getElementById("branch").value,

   cgpa: document.getElementById("cgpa").value,

   rules: document.getElementById("rules").value
 };

 let companies = JSON.parse(localStorage.getItem("companies")) || [];

 companies.push(company);

 localStorage.setItem("companies", JSON.stringify(companies));

 alert("Company Added");

 window.location.href="admin-dashboard.html";
}


window.onload = function(){

 let companies =
 JSON.parse(localStorage.getItem("companies")) || [];

 let total =
 document.getElementById("totalCompanies");

 if(total){

   total.innerText = companies.length;
 }
}




function acceptStudent(index){

 let apps =
 JSON.parse(localStorage.getItem("applications"));

 apps[index].status = "Accepted";

 localStorage.setItem(
 "applications",
 JSON.stringify(apps)
 );

 alert("Student Accepted");
}


function rejectStudent(index){

 let apps =
 JSON.parse(localStorage.getItem("applications"));

 apps[index].status = "Rejected";

 localStorage.setItem(
 "applications",
 JSON.stringify(apps)
 );

 alert("Student Rejected");
}

document.addEventListener("DOMContentLoaded", () => {
    displayDashboardStats();
    displayCompanies();
    displayApplications();
});

// 1. UPDATE THE STAT CARDS (Numbers at the top)
function displayDashboardStats() {
    // Get companies from localStorage
    const companies = JSON.parse(localStorage.getItem("companies")) || [];
    // Get applications from localStorage (assuming you store them under "applications")
    const applications = JSON.parse(localStorage.getItem("applications")) || [];
    // Get students from localStorage 
    const student = JSON.parse(localStorage.getItem("student"));

const totalStudents = student ? 1 : 0;

    // Update the HTML text elements
    document.getElementById("totalCompanies").innerText = companies.length;
    
    // Note: Make sure to add id="totalApplications" and id="totalStudents" to your HTML cards if not already there
    const appCard = document.querySelector(".cards .card:nth-child(2) h2");
    if (appCard) appCard.innerText = applications.length;

    const studentCard = document.querySelector(".cards .card:nth-child(3) h2");
    if (studentCard) studentCard.innerText = students.length;
}

// 2. SHOW COMPANES ADDED
function displayCompanies() {
    const companyListContainer = document.getElementById("adminCompanyList");
    const companies = JSON.parse(localStorage.getItem("companies")) || [];

    if (companies.length === 0) {
        companyListContainer.innerHTML = "<p style='color: gray; padding: 10px;'>No companies added yet.</p>";
        return;
    }

    companyListContainer.innerHTML = companies.map(company => `
        <div style="background: white; padding: 15px; margin-bottom: 10px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <h3 style="margin: 0; color: #333;">${company.name}</h3>
            <p style="margin: 5px 0; color: #666;">Branch Required: ${company.branch} | Cutoff CGPA: ${company.cgpa}</p>
        </div>
    `).join('');
}

// 3. SHOW STUDENT APPLICATIONS
function displayApplications() {
    const applicationListContainer = document.getElementById("applicationList");
    const applications = JSON.parse(localStorage.getItem("applications")) || [];

    if (applications.length === 0) {
        applicationListContainer.innerHTML = "<p style='color: gray; padding: 10px;'>No student applications received yet.</p>";
        return;
    }

    applicationListContainer.innerHTML = applications.map(app => `
        <div style="background: white; padding: 15px; margin-bottom: 10px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <h3 style="margin: 0; color: #333;">${app.studentName}</h3>
            <p style="margin: 5px 0; color: #666;">Applied For: <strong>${app.company}</strong></p>
            <span style="padding: 3px 8px; border-radius: 4px; font-size: 12px; background: #ffeeba; color: #856404;">
                ${app.status || 'Pending'}
            </span>
        </div>
    `).join('');
}