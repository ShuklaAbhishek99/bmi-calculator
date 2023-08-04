window.onload = () => {
    const button = document.getElementById('btn')

    button.addEventListener('click', calcBMI)
}

function calcBMI() {
    let height = document.getElementById('height').value;
    height = Number.parseInt(height) / 100;
    let weight = document.getElementById('weight').value;
    weight = Number.parseInt(weight);
    let result = document.getElementById('result');

    if (!height || isNaN(height) || height < 0) {
        result.innerText = "Please provide a valid height";
        return;
    } else if (!weight || isNaN(weight) || weight < 0) {
        result.innerText = "Please provide a valid weight";
        return;
    }

    let bmi = weight / (height * height).toFixed();

    if (bmi < 18.5) {
        result.innerText = `Under Weight: ${bmi}`;
        result.style.color = "yellow";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        result.innerText = `Normal: ${bmi}`;
        result.style.color = "green";
    } else if (bmi >= 25 && bmi < 29.9) {
        result.innerText = `Over Weight: ${bmi}`;
        result.style.color = "yellowgreen";
    } else if (bmi >= 30 && bmi < 34.9) {
        result.innerText = `Obesity (Class I): ${bmi}`;
        result.style.color = "brown";
    } else if (bmi >= 35.5 && bmi < 39.9) {
        result.innerText = `Obesity (Class II) : ${bmi}`;
        result.style.color = "burlywood";
    } else {
        result.innerText = `Extreme Obesity: ${bmi}`;
        result.style.color = "red";
    }
}