// Initialize variables and elements
let inputan = document.querySelector(".inputan");
let output = document.querySelector(".output");
let namaKota = document.querySelector(".nama-kota");
let suhu = document.querySelector(".suhu");
let kondisi = document.querySelector(".kondisi");
let gambar = document.querySelector(".gambar");
let apiKey = "5df066624a2b37618a4e6f238f45c100";

// Define a set of weather conditions for filtering
const dataCuaca = new Set(["Clear", "Clouds", "Haze", "Snow", "Rain"]);

// Function to get user input from the input field
function getInput() {
  return inputan.value;
}

// Event listener for pressing Enter key in the input field
inputan.addEventListener("keydown", function (ev) {
  if (ev.keyCode === 13) {
    ev.preventDefault();
    document.querySelector(".btn").click();
  }
});

// Function to fetch weather data from the API and update the UI
async function getWeather() {
  try {
    let location = getInput();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
    const res = await fetch(apiUrl);
    const data = await res.json();

    // Log the data to the console (for debugging)
    console.log(data);

    // Extract and display weather information in the UI
    const cuaca = data.weather[0].main;
    namaKota.innerHTML = data.name;
    suhu.innerHTML = `${Math.floor(data.main.temp - 273)}°C`;
    kondisi.innerHTML = cuaca;

    // Set the image source based on weather condition
    gambar.setAttribute("src", `./img/${cuaca}.png`);
  } catch (err) {
    console.log(err);

    // Display error message and image in case of an error
    gambar.setAttribute("src", `./img/error.png`);
    namaKota.innerHTML = "Lokasi tidak ditemukan";
    suhu.innerHTML = "Error";
    kondisi.innerHTML = "Error";
  }
}
