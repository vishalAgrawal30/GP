// // Initialize EmailJS
// document.addEventListener("DOMContentLoaded", function () {
//     emailjs.init("nZ3uJ6fwKx6NZ07kp");
// });

// // Send email on form submit
// const form = document.getElementById("tt-contact-form");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     emailjs.sendForm("service_mail", "template_c6jug3a", form)
//         .then(() => {
//             alert("Message sent successfully!");
//             form.reset(); // optional: clear form
//         })
//         .catch((error) => {
//             alert("Failed to send message.\n" + JSON.stringify(error));
//         });
// });

document.addEventListener("DOMContentLoaded", function () {

    console.log("EmailJS Loaded");

    emailjs.init({
        publicKey: "cbDM-8bP64ZlrT_Nm",
    });
const form = document.getElementById("tt-contact-form");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = {
        Name: form.Name.value,
        Email: form.Email.value,
        Mobile: form.Mobile.value,
        Subject: form.Subject.value,
        option: form.option.value,
        Message: form.Message.value
    };

    emailjs.send("service_z52om3n", "template_ta7q3vd", formData)
    .then(function() {
        alert("Message sent successfully!");
        form.reset();
    }, function(error) {
        alert("Failed to send message. Error: " + JSON.stringify(error));
    });
});
});

