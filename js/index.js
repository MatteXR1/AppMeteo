const container = document.querySelector(".container");
const search = document.querySelector(".ricerca button");
const weatherBox = document.querySelector(".clima");
const weatherDetails = document.querySelector(".dettagliTempo");
const error404 = document.querySelector(".nonTrovato");

search.addEventListener("click", () => {
  const APIKey = "91479950a338234021bc554132089e4f";
  const city = document.querySelector(".ricerca input").value;

  if (city === "") return;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        container.style.height = "400px";
        weatherBox.style.display = "none";
        weatherDetails.style.display = "none";
        error404.style.display = "block";
        error404.classList.add("fadeIn");
        return;
      }

      error404.style.display = "none";
      error404.classList.remove("fadeIn");

      const image = document.querySelector(".clima img");
      const temperature = document.querySelector(".clima .temperatura");
      const description = document.querySelector(".clima .descrizione");
      const humidity = document.querySelector(".dettagliTempo .umidità span");
      const wind = document.querySelector(".dettagliTempo .vento span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "./imgs/sunClear.png";
          break;
        case "Rain":
          image.src = "./imgs/umbrellaRaining.png";
          break;
        case "Snow":
          image.src = "./imgs/snowy.png";
          break;
        case "Clouds":
          image.src = "./imgs/cloudy.png";
          break;
        case "Haze":
          image.src = "./imgs/windy.png";
          break;
        default:
          image.src = "";
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

      weatherBox.style.display = "";
      weatherDetails.style.display = "";
      weatherBox.classList.add("fadeIn");
      weatherDetails.classList.add("fadeIn");
      container.style.height = "590px";
    });
});
