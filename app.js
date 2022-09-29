const BMIData = [
  { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
  { name: "Bonne santé", color: "green", range: [18.5, 25] },
  { name: "Surpoids", color: "lightcoral", range: [25, 30] },
  { name: "Obésité modérée", color: "orange", range: [30, 35] },
  { name: "Obésité sévère", color: "crimson", range: [35, 40] },
  { name: "Obésité morbide", color: "purple", range: 40 },
];

// VARIABLES

let form = document.querySelector("form");
let weightValue = document.querySelector("#weightInput");
let heightValue = document.querySelector("#heightInput");
let error = document.querySelector("#error");
let resultBMI = document.querySelector("#result");
let health = document.querySelector("#etat");
let showError = document.createElement("p");

// FUNCTION

form.addEventListener("submit", (e) => {
  e.preventDefault();
  calculateBMC();
});

const calculateBMC = () => {
  const height = heightValue.value;
  const weight = weightValue.value;
  if (!height || !weight || weight <= 0 || height <= 0) {
    showError.textContent = "Les informations saisies ne sont pas valides";
    error.append(showError);
  } else {
    // IMC = poids en kg / taille² en m
    let result = (weight / Math.pow(height / 100, 2)).toFixed(1);
    let BMIResult = BMIData.find((data) => {
      if (result >= data.range[0] && result <= data.range[1]) return data;
    });
    resultBMI.textContent = result;
    resultBMI.style.color = BMIResult.color;
    health.textContent = BMIResult.name;
    showError.remove();
  }
};
