// ===============================
// EmailJS Initialization
// ===============================

emailjs.init({
    publicKey: "F4g7vlNzmFMiPbr8X"
});

// ===============================
// Contact Form
// ===============================

const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("status-message");
const submitBtn = form.querySelector("button[type='submit']");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    submitBtn.disabled = true;
    submitBtn.innerHTML = `
        <span class="spinner-border spinner-border-sm me-2"></span>
        Sending...
    `;

    statusMessage.innerHTML = "";

    emailjs.sendForm(
        "service_fbfixph",
        "template_d7tctsf",
        form
    )

    .then(function () {

        statusMessage.innerHTML = `
            <div class="alert alert-success">
                ✅ Thank you! Your enquiry has been sent successfully.
            </div>
        `;

        form.reset();

    })

    .catch(function (error) {

        console.error(error);

        statusMessage.innerHTML = `
            <div class="alert alert-danger">
                ❌ Failed to send your message. Please try again.
            </div>
        `;

    })

    .finally(function () {

        submitBtn.disabled = false;
        submitBtn.innerHTML = "Send Message";

    });

});