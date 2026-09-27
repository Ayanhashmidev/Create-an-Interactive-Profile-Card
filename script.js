// Profile information change

function changeProfile() {

    document.getElementById("profileName").innerText = "Muhammad Ayan";

    document.getElementById("profileRole").innerText = "Frontend Developer";

    document.getElementById("profileHeading").innerText =
        "Welcome to Ayan's Developer Profile";

    document.getElementById("profileDescription").innerText =
        "I love building creative websites and learning new web development technologies.";
}


// Profile image change

function changeImage() {

    document.getElementById("profileImage").src =
        "https://i.pravatar.cc/300?img=33";
}


// Mouseover event

function imageOver() {

    document.getElementById("profileImage").style.transform =
        "scale(1.12)";

    document.getElementById("profileImage").style.borderColor =
        "#ec4899";
}


// Mouseout event

function imageOut() {

    document.getElementById("profileImage").style.transform =
        "scale(1)";

    document.getElementById("profileImage").style.borderColor =
        "#6366f1";
}


// User input

function showName() {

    var name = document.getElementById("userName").value;

    if (name == "") {

        document.getElementById("welcomeMessage").innerText =
            "Please enter your name.";

    } else {

        document.getElementById("welcomeMessage").innerText =
            "Hello, " + name + "! Welcome to my profile.";

    }
}