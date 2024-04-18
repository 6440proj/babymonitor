// app.js
const appElement = document.getElementById("app");

const createUI = () => {
  const ui = `
    <div class="monitor">
      <h1>Baby Monitoring App</h1>
      <div class="vital-sign" id="heartRate">Heart Rate: <span id="heartRateValue">--</span></div>
      <div class="vital-sign" id="movement">Movement: <span id="movementValue">--</span></div>
      <div class="vital-sign" id="bloodPressure">Blood Pressure: <span id="bloodPressureValue">--</span></div>
      <div class="vital-sign" id="temperature">Temperature: <span id="temperatureValue">--</span></div>
      <button id="startMonitoring">Start Monitoring</button>
      <button id="stopMonitoring" disabled>Stop Monitoring</button>
    </div>
  `;
  appElement.innerHTML = ui;
};

createUI();

const startButton = document.getElementById("startMonitoring");
const stopButton = document.getElementById("stopMonitoring");
const heartRateValue = document.getElementById("heartRateValue");
const movementValue = document.getElementById("movementValue");
const bloodPressureValue = document.getElementById("bloodPressureValue");
const temperatureValue = document.getElementById("temperatureValue");

let monitoringInterval;

const startMonitoring = () => {
  monitoringInterval = setInterval(() => {
    const simulatedHeartRate = Math.floor(Math.random() * (160 - 120) + 120);
    const simulatedMovement = Math.random() > 0.5 ? "Active" : "Inactive";
    const simulatedBloodPressure = `${Math.floor(Math.random() * (140 - 90) + 90)}/${Math.floor(Math.random() * (90 - 60) + 60)}`;
    const simulatedTemperature = `${(Math.random() * (37.5 - 36.0) + 36.0).toFixed(1)}°C`;

    heartRateValue.innerText = simulatedHeartRate;
    movementValue.innerText = simulatedMovement;
    bloodPressureValue.innerText = simulatedBloodPressure;
    temperatureValue.innerText = simulatedTemperature;
  }, 2000);

  startButton.disabled = true;
  stopButton.disabled = false;
};

const stopMonitoring = () => {
  clearInterval(monitoringInterval);

  heartRateValue.innerText = "--";
  movementValue.innerText = "--";
  bloodPressureValue.innerText = "--";
  temperatureValue.innerText = "--";

  startButton.disabled = false;
  stopButton.disabled = true;
};

startButton.addEventListener("click", startMonitoring);
stopButton.addEventListener("click", stopMonitoring);
