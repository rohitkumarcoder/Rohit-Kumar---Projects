const apiKey = "3ad86180dffa6bbd955ec0f6e9b8894c";

async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("Please enter a city name!");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            alert("City not found. Please try again.");
            return;
        }

        document.getElementById("city-name").textContent = data.name;
        document.getElementById("description").textContent = data.weather[0].description.toUpperCase();
        document.getElementById("temperature").textContent = `🌡️ ${data.main.temp}°C`;
        document.getElementById("humidity").textContent = `💧 Humidity: ${data.main.humidity}%`;
        document.getElementById("wind").textContent = `💨 Wind Speed: ${data.wind.speed} m/s`;

        document.getElementById("weather-info").style.display = "block";
    } catch (error) {
        alert("Error fetching weather data!");
    }
}
