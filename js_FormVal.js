function validate_form() {

    var email = document.forms['form52']['email'].value;
    var pass = document.forms['form52']['pass'].value;

    if (validate_email(email) && check_pass(pass)) {
        alert("form submit successfully!");
        // return true;
        return false;
    } else {
        return false;
    }
}


function validate_email(email) {

    var email_re = new RegExp(/^\w+@\w+(\.\w+)+$/);

    if (email.length < 1) {
        alert("Email is required");
        return false;
    } else if (!email_re.test(email)) {
        alert("Invalid Email Address");
        return false;
    } else {
        return true;
    }
}

function check_pass(pass) {
    var pass_re = new RegExp(/^.{6,30}$/);

    if (pass.length < 1) {
        alert("Password is required");
        return false;
    } else if (!pass_re.test(pass)) {
        alert("Please provide strong password");
        return false;
    } else {
        return true;
    }
} //end of function