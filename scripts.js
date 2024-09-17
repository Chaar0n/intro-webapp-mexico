// Función para convertir de RGB a Hexadecimal
function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

// Actualizar el color verde
document.getElementById("green-slider").addEventListener("input", function() {
    let greenValue = this.value;
    let greenBox = document.getElementById("green-box");
    let rgb = `rgb(0, ${greenValue}, 0)`;
    greenBox.style.backgroundColor = rgb;

    // Actualizar el valor Hex
    document.getElementById("green-hex").innerText = rgbToHex(0, greenValue, 0);
});

// Actualizar el color rojo
document.getElementById("red-slider").addEventListener("input", function() {
    let redValue = this.value;
    let redBox = document.getElementById("red-box");
    let rgb = `rgb(${redValue}, 0, 0)`;
    redBox.style.backgroundColor = rgb;

    // Actualizar el valor Hex
    document.getElementById("red-hex").innerText = rgbToHex(redValue, 0, 0);
});