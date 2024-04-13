const eBtnSubbmit = document.getElementById("btn_submit");
const formElements = [
    {
        name: "name",
        validation: value => /^[a-zA-Z\s]{2,15}$/.test(value),
        errorMessage: "Please, enter 2-15 characters",
        isValid: false,
    },
    {
        name: "email",
        // General Email Regex (RFC 5322 Official Standard)
        validation: value => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value),
        errorMessage: "Please, enter correct email",
        isValid: false,
    },
    {
        name: "phone",
        validation: value => /\d{3}-\d{2}-\d{2}/.test(value),
        errorMessage: "Please, enter corerct number 123-45-67",
        isValid: false,
    },
    {
        name: "theme",
        validation: value => value.split(" ").length >= 5 && value.split(" ").length <= 20,
        errorMessage: "Please, enter 5-20 words",
        isValid: false,
    },
    {
        name: "quantity",
        validation: value => Number(value) >= 1 && Number(value) <= 6,
        errorMessage: "Quantity min 1, max 6",
        isValid: false,
    },
];

formElements.forEach((item) => {
    const eError = document.getElementById(`${item.name}_p_error`);
    document.getElementById(item.name).oninput = (e) => {
        item.isValid = item.validation(e.target.value.trim());

        if (item.isValid) {
            eError.style.color = "green"; 
            eError.innerHTML = "Input correct :)"; 
        } else {
            eError.style.color = "red"; 
            eError.innerHTML = item.errorMessage; 
        }

        eBtnSubbmit.disabled = formElements.map(e => e.isValid).includes(false);
    }
});
