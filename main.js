document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("sign-up");

    const nameInput = document.querySelector("#username");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const personalNumberInput = document.querySelector("#personal-number");
    const mobileNumberInput = document.querySelector("#mobile-number");
    const jobDescriptionInput = document.querySelector("#job-description");

    const nameError = document.querySelector("#username-error");
    const emailError = document.querySelector("#email-error");
    const passwordError = document.querySelector("#password-error");
    const personalNumberError = document.querySelector("#personal-number-error");
    const mobileNumberError = document.querySelector("#mobile-number-error");
    const jobDescriptionError = document.querySelector("#job-description-error");

    function checkUserName() {
        // validaciis logika usernamze
    }

    function checkEmail() {
        // validacia emailze
    }

    function checkPassword() {

    //validacia passswordze
    }

    function checkPersonalNumber() {
        const personalNumberValue = personalNumberInput.value.trim();
        if (personalNumberValue === "") {
            personalNumberError.textContent = "Personal number is required";
            personalNumberInput.classList.remove("correct");
            personalNumberInput.classList.add("error");
            return false;
        } else if (!/^\d{11}$/.test(personalNumberValue)) {
            personalNumberError.textContent = "Personal number must contain 11 digits";
            personalNumberInput.classList.remove("correct");
            personalNumberInput.classList.add("error");
            return false;
        } else {
            personalNumberError.textContent = "";
            personalNumberInput.classList.remove("error");
            personalNumberInput.classList.add("correct");
            return true;
        }
    }

    function checkMobileNumber() {
        const mobileNumberValue = mobileNumberInput.value.trim();
        if (mobileNumberValue === "") {
            mobileNumberError.textContent = "Mobile number is required";
            mobileNumberInput.classList.remove("correct");
            mobileNumberInput.classList.add("error");
            return false;
        } else if (!/^\d{9}$/.test(mobileNumberValue)) {
            mobileNumberError.textContent = "Mobile number must contain 9 digits";
            mobileNumberInput.classList.remove("correct");
            mobileNumberInput.classList.add("error");
            return false;
        } else {
            mobileNumberError.textContent = "";
            mobileNumberInput.classList.remove("error");
            mobileNumberInput.classList.add("correct");
            return true;
        }
    }

    function checkJobDescription() {
        const jobDescriptionValue = jobDescriptionInput.value.trim();
        if (jobDescriptionValue === "") {
            jobDescriptionError.textContent = "Job description is required";
            jobDescriptionInput.classList.remove("correct");
            jobDescriptionInput.classList.add("error");
            return false;
        } else if (jobDescriptionValue.length > 50) {
            jobDescriptionError.textContent = "Job description must not exceed 50 characters";
            jobDescriptionInput.classList.remove("correct");
            jobDescriptionInput.classList.add("error");
            return false;
        } else {
            jobDescriptionError.textContent = "";
            jobDescriptionInput.classList.remove("error");
            jobDescriptionInput.classList.add("correct");
            return true;
        }
    }

    nameInput.addEventListener("input", checkUserName);
    emailInput.addEventListener("input", checkEmail);
    passwordInput.addEventListener("input", checkPassword);
    personalNumberInput.addEventListener("input", checkPersonalNumber);
    mobileNumberInput.addEventListener("input", checkMobileNumber);
    jobDescriptionInput.addEventListener("input", checkJobDescription);

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const isUserNameValid = checkUserName();
        const isEmailValid = checkEmail();
        const isPasswordValid = checkPassword();
        const isPersonalNumberValid = checkPersonalNumber();
        const isMobileNumberValid = checkMobileNumber();
        const isJobDescriptionValid = checkJobDescription();
    
        if (isUserNameValid && isEmailValid && isPasswordValid && isPersonalNumberValid && isMobileNumberValid && isJobDescriptionValid) {
            form.submit();
        } else {
            let errorMessage = "Please correct the following errors:\n";
            if (!isUserNameValid) {
                errorMessage += "- Username is required\n";
            }
            if (!isEmailValid) {
                errorMessage += "- Please enter a valid email address\n";
            }
            if (!isPasswordValid) {
                errorMessage += "- Password must be at least 5 characters long and contain letters and numbers\n";
            }
            if (!isPersonalNumberValid) {
                errorMessage += "- Personal number must contain 11 digits\n";
            }
            if (!isMobileNumberValid) {
                errorMessage += "- Mobile number must contain 9 digits\n";
            }
            if (!isJobDescriptionValid) {
                errorMessage += "- Job description is required and must not exceed 50 characters\n";
            }
    
            alert(errorMessage);
        }
    });
    
});
