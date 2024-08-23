/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const quien = ["El gato", "Mi mamá", "Mi abuela", "Mi novia"];
  const accion = ["comió", "orinó", "aplastó", "rompió"];
  const que = ["mi tarea", "mi teléfono", "mi compu"];
  const cuando = [
    "antes de la clase",
    "cuando yo estaba durmiendo",
    "mientras cocinaba",
    "durante la comida"
  ];

  function getExcuse() {
    const quienIndex = Math.floor(Math.random() * quien.length);
    const accionIndex = Math.floor(Math.random() * accion.length);
    const queIndex = Math.floor(Math.random() * que.length);
    const cuandoIndex = Math.floor(Math.random() * cuando.length);

    return `${quien[quienIndex]} ${accion[accionIndex]} ${que[queIndex]} ${cuando[cuandoIndex]}`;
  }

  document.getElementById("excuse").innerHTML = getExcuse();
  console.log("Hello Rigo from the console!");
};
