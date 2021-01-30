$(document).ready(function() {

    $(".img1").mouseenter(function() {
        $(".img1").css({ "border": "1px solid red" });
    });

    $(".img1").mouseleave(function() {
        $(".img1").css({ "border": "0px" });
    });


    $("#p1").hover(function() {
            $("#p1").after('<span id="err" class="size13 cl_r b7 d_in">paragraph hover</span>');
        },
        function() {
            $("#err").hide();
        }
    );


    $(".hide1").click(function() {
        $(".p2").hide(1000);
    });
});





$(document).ready(function() {

    $("#email").focusout(function() {
        check_mail();
    });

    $("#pass").focusout(function() {
        check_pass();
    });

    $('.form1').submit(function(e) {
        if (check_mail() === true && check_pass() === true) {
            return;
        } else {
            e.preventDefault();
        }
    });

});


//email validation function
function check_mail() {
    $("#err").remove();
    var email_re = new RegExp(/^\w+@\w+(\.\w+)+$/);
    var email = $("#email").val();

    if (email.length < 1) {
        $("#email").css({ "border": "1px solid red", "padding": "10px" });
        $('#email').after('<span id="err" class="size13 cl_r b7">Email is required</span>');
        // $("#email").focus();
        return false;

    } else if (!email_re.test(email)) {
        $("#email").css({ "border": "1px solid red", "padding": "10px" });
        $("#email").after('<span id="err" class="size13 cl_r b7">Please provide valid Email i.e:xxx@gmail.com</span>');
        // $("#email").focus();
        return false;


    } else {
        $("#email").css({ "border": "2px solid green", "padding": "10px" });
        return true;
    }
} //end of function


// password validation function
function check_pass() {
    $("#error").remove();
    var pass_re = new RegExp(/^.{6,30}$/);
    var pass = $("#pass").val();

    if (pass.length < 1) {
        $("#pass").css({ "border": "1px solid red", "padding": "10px" });
        $('#pass').after('<span id="err" class="size13 cl_r b7">Password is required</span>');
        // $("#pass").focus();
        return false;

    } else if (!pass_re.test(pass)) {
        $("#pass").css({ "border": "1px solid red", "padding": "10px" });
        $('#pass').after('<span id="err" class="size13 cl_r b7">Please provide strong password</span>');
        // $("#pass").focus();
        return false;

    } else {
        $("#pass").css({ "border": "2px solid green", "padding": "10px" });
        return true;
    }
} //end of function




//wordpress ka kaam

// 	var term308=document.getElementsByClassName("term-308")[0];
// // 	var term308=document.getElementById("content").childNodes[1];
// 	term308.setAttribute("src","https://asanbuy.pk/wp-content/uploads/2021/01/clearance-saga-inner-banner-asanbuy.pk_.jpg");
// 	var img1=term308.outerHTML;
// 	var img2="<a href='https://asanbuy.pk/clearance-saga/'>"+img1+"</a>";
// 	term308.outerHTML=img2;
	
// 	term308.setAttribute('id',"ab212");
// 	document.getElementById("ab212").outerHTML=img2;
	
// 	var children = document.getElementsByClassName("term-308")[0];// any tag could be used here..

//   for(var i = 0; i< children.length;i++)
//   {
//     if (children.childNodes[i].getAttribute('id') == 'content') // any attribute could be used here
//     {
//      console.log("ahsan bhai");
//      console.log(children.childNodes[i].childNodes[1].outerHTML);

//     }
//   }