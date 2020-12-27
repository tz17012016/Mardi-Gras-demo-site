document.querySelector("#submit").addEventListener("click", () => {
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;
    let email = document.forms["myForm"]["email"].value;
    if (fname == "") {
        alert("Name must be filled out");
        return false;
    } else if (lname == "") {
        alert("last name must be filled out");
        return false;
    } else if (email == "") {
        alert("email must be filled out");
        return false;
    } else {
        alert("submited");
    }
});

//function validateForm() {}