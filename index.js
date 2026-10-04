let numberEl = document.getElementById("number-el")
const buttonEl = document.getElementById("button-el")
let lengthEl = document.getElementById("length-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")

buttonEl.addEventListener("click", function() {
    const num = Number(numberEl.value);
    lengthEl.innerHTML = `${num} meters = ${(num*3.281).toFixed(3)} feet | ${num} feet = ${(num/3.281).toFixed(3)} meters`
    volumeEl.innerHTML = `${num} liters = ${(num/3.785).toFixed(3)} gallons | ${num} gallons = ${(num*3.785).toFixed(3)} liters`
    massEl.innerHTML = `${num} kilos = ${(num*2.205).toFixed(3)} pounds | ${num} pounds = ${(num/2.205).toFixed(3)} kilos`
    numberEl.value = 0
})