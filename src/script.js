function submitRequest(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let service = document.getElementById("service").value;
    if (name === "" || email === "" || service === ""){
        alert("Please fill in all fields!");
        return;
    }
    else if (email.indexOf("@") === -1){
        alert("Please enter a valid email address!");
        return;
    }
    else {
           alert("Request submitted successfully!");
    }
}
function submitForm(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    if (name === "" || email === "" || message === ""){
        alert("Please fill in all fields!");
        return;
    }
    else if (email.indexOf("@") === -1){
        alert("Please enter a valid email address!");
        return;
    }
    else {
           alert("Form submitted successfully!");
    }
}