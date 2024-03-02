
// Function to navigate to Year page

function navigateToSub(department) {
    if (department === 'Python') {
        window.location.href = "./Subjects/Python.html";
    } 
    if (department === 'Second_Year') {
        window.location.href = "./CSE/Second_Year.html";
    }
    if (department === 'Third_Year') {
         window.location.href = "./CSE/Third_Year.html";
    }
    if (department === 'Fourth_Year') {
        window.location.href = "./CSE/Fourth_Year.html";
    }
    if (department === 'PG_First_Year') {
        window.location.href = "#";
    }
    if (department === 'PG_Second_Year') {
        window.location.href = "#";
    }
    else {
       // window.location.href = department + "_AIML.html";
    }
}

