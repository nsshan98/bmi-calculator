const feet = document.getElementById("feet")
const inch = document.getElementById("inch")
const kg = document.getElementById("kg")

feet.addEventListener("input", calculateBMI)
inch.addEventListener("input", calculateBMI)
kg.addEventListener("input", calculateBMI)


function calculateBMI(){
    const feetValue = parseFloat(feet.value) || 0; // Convert input to a number or default to 0
    const inchValue = parseFloat(inch.value) || 0;
    const kgValue = parseFloat(kg.value) || 0;

    if (feetValue !== 0 && kgValue !== 0) {
        const feetInMeter = feetValue / 3.281
        const feetInInch = inchValue / 39.37
        // Total Height In Meter
        const totalHeightInMeter = feetInMeter + feetInInch

        // Calculate Total BMI
        const totalBMI = kgValue / (totalHeightInMeter * totalHeightInMeter)

    
        const showBmi = document.getElementById("showBmi")
        showBmi.innerHTML = totalBMI.toFixed(1)

        if (totalBMI < 18.5) {
            bmiResult.innerHTML = "Your BMI Result: " + "You Are Underweight";
          } else if (totalBMI >= 18.5 && totalBMI <= 24.9) {
            bmiResult.innerHTML = "Your BMI Result: " + "Your Weight Is Normal";
          }
          else if (totalBMI > 24.9 && totalBMI <= 29.9) {
            bmiResult.innerHTML = "Your BMI Result: " + "You Are Excess Weight";
          }
          else {
            bmiResult.innerHTML = "Your BMI Result: " + "You Are Fatty";
          }
        
    }
}
calculateBMI()