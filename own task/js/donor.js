document.addEventListener("DOMContentLoaded", () => {

    const donorForm = document.getElementById("donorForm");
    const certificateSection = document.getElementById("certificateSection");

    donorForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Show certificate section
        certificateSection.style.display = "block";

        // Smooth scroll to certificate section
        certificateSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

});
