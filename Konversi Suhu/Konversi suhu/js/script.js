function konversikefahrenheit() {
    const celsiusInput = document.getElementById("celsiusInput");
    const fahrenheitResult = document.getElementById("fahrenheitResult");
    const fahrenheitFormula = document.getElementById("fahrenheitFormula");
    const celsiusError = document.getElementById("celsiusError");
  
    const value = parseFloat(celsiusInput.value);
  
    if (isNaN(value)) {
      celsiusError.textContent = "Masukkan angka Celsius yang valid.";
      fahrenheitResult.textContent = "";
      fahrenheitFormula.textContent = "";
      return;
    }
  
    celsiusError.textContent = "";
    const fahrenheit = (value * 9 / 5) + 32;
    fahrenheitResult.textContent = `${value}°C = ${fahrenheit.toFixed(1)}°F`;
  
    // Tampilan cara menghitung dari celcius ke fahrenheit
    fahrenheitFormula.textContent = `${value} × (9 / 5) + 32\n= ${(value * 9 / 5).toFixed(1)} + 32\n= ${fahrenheit.toFixed(1)}°F`;
  }
  
  function konversikecelcius() {
    const fahrenheitInput = document.getElementById("fahrenheitInput");
    const celsiusResult = document.getElementById("celsiusResult");
    const celsiusFormula = document.getElementById("celsiusFormula");
    const fahrenheitError = document.getElementById("fahrenheitError");
  
    const value = parseFloat(fahrenheitInput.value);
  
    if (isNaN(value)) {
      fahrenheitError.textContent = "Masukkan angka Fahrenheit yang valid.";
      celsiusResult.textContent = "";
      celsiusFormula.textContent = "";
      return;
    }
  
    fahrenheitError.textContent = "";
    const intermediate = value - 32;
    const celsius = intermediate * 5 / 9;
    celsiusResult.textContent = `${value}°F = ${celsius.toFixed(1)}°C`;
  
    // Tampilan Cara menghitung dari fahrenheit ke celcius
    celsiusFormula.textContent = `(${value} - 32) × (5 / 9)\n= ${intermediate} × 5 / 9\n= ${celsius.toFixed(1)}°C`;
  }
  
  function resetFields() {
    document.getElementById("celsiusInput").value = "";
    document.getElementById("fahrenheitInput").value = "";
  
    document.getElementById("fahrenheitResult").textContent = "";
    document.getElementById("celsiusResult").textContent = "";
  
    document.getElementById("fahrenheitFormula").textContent = "";
    document.getElementById("celsiusFormula").textContent = "";
  
    document.getElementById("celsiusError").textContent = "";
    document.getElementById("fahrenheitError").textContent = "";
  }