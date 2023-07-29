const div = document.querySelector("#result");
const goBtn = document.querySelector("#GO");
const div2 = document.querySelector("#cloud");
const icon = document.querySelector("#icon");
const windSp = document.querySelector("#wind");
const humidity = document.querySelector("#humidity");
const fah = document.querySelector("#fah");
const cel = document.querySelector("#cel");

const getWeather = async () => {
  try {
    const q = document.querySelector("#search").value;
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=c694e36ec00f4623ae0ec833fcbd2921&units=metric`
    );

    const data = await res.json();
    div.innerHTML = data.name.toUpperCase();
    //icon of weather

    div2.innerHTML = data.weather[0].main.toLowerCase();
    const pic = data.weather[0].icon;
    const iconUrl = `https://openweathermap.org/img/wn/${pic}.png`;
    icon.src = iconUrl;

    windSp.innerHTML = `Wind Speed: ${data.wind.speed}`;
    humidity.innerHTML = `Humidity: ${data.main.humidity}`;

    fah.innerHTML = `${Math.round((data.main.temp * 9) / 5 + 32)}°F | `;
    cel.innerHTML = `${Math.round(data.main.temp)}°C`;
  } catch (error) {
    console.log(error);
  }
};
goBtn.addEventListener("click", getWeather);
// getWeather();
