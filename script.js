const apiKey = "5cc87d6472b274e4e46142594bbb5f60";

async function getWeather() {
    const city = document.getElementById("city").value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        if (data.cod === "404") {
            document.getElementById("weatherResult").innerHTML =
                "<p>City not found!</p>";
            return;
        }

        document.getElementById("weatherResult").innerHTML = `
            <h2>${data.name}</h2>
            <p>🌡 Temperature: ${data.main.temp} °C</p>
            <p>☁ Weather: ${data.weather[0].description}</p>
            <p>💧 Humidity: ${data.main.humidity}%</p>
            <p>💨 Wind Speed: ${data.wind.speed} m/s</p>
        `;
    } catch (error) {
        document.getElementById("weatherResult").innerHTML =
            "<p>Error fetching weather data.</p>";
    }
}