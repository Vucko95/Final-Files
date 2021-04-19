const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
// Height and Weight are 2 values that user inputs
const calculate = document.querySelector("#calculate");
const yourBMI = document.querySelector("#finalBMI");

calculate.addEventListener("click", () => {
  // When user clicls on the button, formula for BMI Executes (Calculation: [weight (kg) / height (cm) / height (cm)] x 10,000)

  if (height.value != "" && weight.value != "") {
    let finalBMI = (weight.value / (height.value * height.value)) * 10000;
    yourBMI.innerHTML = `Your BMI Is : <span> ${finalBMI.toFixed(2)} </span>`;
    // toFixed we use to round the numbers in this case to two decimals
  } else {
    yourBMI.innerHTML = `Please Enter Correct Value`;
    // If user leaves inputs Empty this text will show up
  }
});
