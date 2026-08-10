const form = document.getElementById("faultForm");

if (form) {

    const fullname = document.getElementById("fullname");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const category = document.getElementById("category");
    const description = document.getElementById("description");

    const counter = document.getElementById("charCount");
    const preview = document.getElementById("previewText");
    const status = document.getElementById("status");

    const categories = [
        "Electrical",
        "Plumbing",
        "Furniture",
        "Internet",
        "Security"
    ];

    let report = {
        name: "",
        category: "",
        severity: "",
        description: ""
    };
        function updateCounter() {
        counter.textContent = description.value.length;
    }

    function updatePreview() {

        let selectedSeverity = document.querySelector('input[name="severity"]:checked');

        report.name = fullname.value;
        report.category = category.value;
        report.description = description.value;
        report.severity = selectedSeverity ? selectedSeverity.value : "";

        preview.innerHTML =
            "<strong>Name:</strong> " + report.name + "<br>" +
            "<strong>Category:</strong> " + report.category + "<br>" +
            "<strong>Severity:</strong> " + report.severity + "<br>" +
            "<strong>Description:</strong> " + report.description;

    }
        function validateForm() {

        let valid = true;

        document.querySelectorAll(".error").forEach(function(error) {
            error.textContent = "";
        });

        if (fullname.value.trim() === "") {
            fullname.nextElementSibling.textContent = "Enter your full name.";
            valid = false;
        }

        if (!email.value.includes("@")) {
            email.nextElementSibling.textContent = "Enter a valid email.";
            valid = false;
        }

        if (phone.value.length < 10) {
            phone.nextElementSibling.textContent = "Phone number is too short.";
            valid = false;
        }

        if (category.value === "") {
            category.nextElementSibling.textContent = "Select a category.";
            valid = false;
        }

        let severity = document.querySelector('input[name="severity"]:checked');

        if (severity && severity.value === "High") {

            if (description.value.length < 30) {

                description.parentElement.querySelector(".error").textContent =
                    "High severity reports require more detail.";

                valid = false;

            }

        }

        return valid;

    }
        description.addEventListener("input", function () {

        updateCounter();
        updatePreview();

    });

    form.addEventListener("input", function () {

        updatePreview();

    });

    form.addEventListener("submit", function (event) {

        if (!validateForm()) {

            event.preventDefault();

            status.style.color = "red";
            status.textContent = "Please correct the highlighted errors.";

        } else {

            status.style.color = "green";
            status.textContent = "Submitting report...";

        }

    });

}