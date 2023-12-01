//DOM Manipulation

const inputPercentage = document.querySelector(".input-percentage");
const inputTime = document.querySelector(".input-time");
const inputIncome = document.querySelector(".input-income");
const submitButton = document.querySelector(".submit-button");
const form = document.querySelector("#form-container");
const showResult = document.querySelector(".show-result");
const textResult = document.querySelector(".text-result");
const select = document.querySelector(".inputs");
const resetButton = document.querySelector(".reset-button");

submitButton.addEventListener("click", switchingView);
resetButton.addEventListener("click", reload);

function switchingView(e) {
    e.preventDefault()

    if (inputPercentage.value === "") {
        alert("Complete the fields")
    } else if (inputTime.value === "") {
        inputTime.value = "Pick an option"
    } else if (inputIncome.value === "") {
        alert("Complete the fields")
    } else {
        savingCapacity();
    }

}

function savingCapacity() {
    form.style.display = "none";
    showResult.style.display = "block";

    const percentage = inputPercentage.value;
    const income = inputIncome.value;
    const result = income * percentage / 100;
    console.log(result);

    const index = select.options;
    console.log(index);
    
    textResult.innerHTML = `Your saving capacity is: ${result}$`
}

function reload() {
    location.reload();
}