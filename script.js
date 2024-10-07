function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById('temperatureInput').value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById('result').innerText = `${celsius} °C é igual a ${fahrenheit.toFixed(2)} °F`;
    } else {
        document.getElementById('result').innerText = 'Por favor, insira um número válido.';
    }
}

function convertToCelsius() {
    const fahrenheit = parseFloat(document.getElementById('temperatureInput').value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById('result').innerText = `${fahrenheit} °F é igual a ${celsius.toFixed(2)} °C`;
    } else {
        document.getElementById('result').innerText = 'Por favor, insira um número válido.';
    }
}
