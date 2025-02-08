async function getWeather() {
    const city = document.getElementById("city").value;
    const url = `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=c`; 

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "e72a4f8c8dmsh428cab93a482562p1b7143jsn2d0bbf9699ff", 
            "X-RapidAPI-Host": "yahoo-weather5.p.rapidapi.com"
        }
    };



    try {
        const response = await fetch(url, options);
        const data = await response.json();

        // Extract weather information from Yahoo API response

        const location = data.location.city;
        const temp = data.current_observation.condition.temperature;
        const description = data.current_observation.condition.text;
        const iconCode = data.current_observation.condition.code;

        // Update UI

        document.getElementById("city-name").innerText = location;
        document.getElementById("temperature").innerText = `Temperature: ${temp}°C`;
        document.getElementById("description").innerText = description;
        // document.getElementById("icon").src = `https://yastatic.net/weather/i/icons/funky/dark/${iconCode}.svg`;
    } catch (error) {
        alert("City not found or API request failed. Please try again.");
    }
}



