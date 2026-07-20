// ===============================
// EmailJS Initialization
// ===============================

(function () {
    emailjs.init({
        publicKey: "F4g7vlNzmFMiPbr8X"
    });
})();

// ===============================
// Contact Form
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    const statusMessage = document.getElementById("status-message");

    if (!form) {
        console.error("Form with id='contact-form' not found.");
        return;
    }

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
        .then(function (response) {

            console.log("SUCCESS!", response);

            statusMessage.innerHTML = `
                <div class="alert alert-success">
                    ✅ Thank you! Your enquiry has been sent successfully.
                </div>
            `;

            form.reset();

        })
        .catch(function (error) {

            console.error("EmailJS Error:", error);

            statusMessage.innerHTML = `
                <div class="alert alert-danger">
                    ❌ ${error.text || "Failed to send message. Please try again."}
                </div>
            `;

        })
        .finally(function () {

            submitBtn.disabled = false;
            submitBtn.innerHTML = "Send Message";

        });

    });

});