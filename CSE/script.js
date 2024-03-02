
// Function to navigate to Year page

function navigateToSub(department) {
    if (department === 'Python') {
        window.location.href = "./Subjects/Python.html";
    } 
    if (department === 'Maths') {
        window.location.href = "./Subjects/Maths.html";
    }
    if (department === 'Chemistry') {
         window.location.href = "./Subjects/Chemistry.html";
    }
    if (department === 'Physics') {
        window.location.href = "./Subjects/Physics.html";
    }
    if (department === 'English') {
        window.location.href = "./Subjects/English.html";
    }
    if (department === 'PG_Second_Year') {
        window.location.href = "#";
    }
    else {
       // window.location.href = department + "_AIML.html";
    }
}

