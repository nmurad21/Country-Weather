const inputCity = document.querySelector("input[type='text']");
const selectDegree = document.querySelector(".form-select");
const form = document.querySelector("form");
const getInfo = document.getElementById("info");

// fetch(
//   "https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=london"
// )
//   .then((response) => response.json())
//   .then((data) => console.log(data));

async function getDegree(url){
        let promise = await fetch(url);
        let response = await promise.json();
        return response;
}

form.addEventListener("submit", change);


async function change(e) {
    e.preventDefault();
  
    let response = await getDegree(
      "https://api.weatherapi.com/v1/current.json?key=6bc15cfb31414fbda9f95625221905&q=london"
    );
    console.log(response);
}

