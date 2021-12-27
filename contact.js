function set_error(id, error)
{
    element = document.getElementById(id);
    element.getElementsByClassName('name_error')[0].innerHTML = error;
}

function validate_form()
{
    var return_value = true;
    var fname = document.forms['contact_form']["fname"].value;
    var email = document.forms['contact_form']["email"].value;
    var postal = document.forms['contact_form']["postal"].value;
    var p_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var p_code = /[a-zA-Z][0-9][a-zA-Z](-| |)[0-9][a-zA-Z][0-9]/;

    // For Name
    if(fname.length < 3)
    {
        set_error("name", "Length of your name is too short");
        return_value = false;
    }

    //For Email
    if(!p_email.test(email))
    {
        set_error("email", "Enter a Valid Email Address");
        return_value = false;
    }

    //For Postal Code
    if(!p_code.test(postal))
    {
        set_error("postal", "Enter a Valid Postal Code");
        return_value = false;
    }
    

    return return_value;
}

document.getElementById("aboutBox").style.display = "none";
function about_box()
{
    document.getElementById("aboutBox").style.display = "block";
}

function comment()
{
    document.getElementById("box_about").innerHTML = "Comment";
}

function question()
{
    document.getElementById("box_about").innerHTML = "Question";
}

