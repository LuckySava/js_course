// import LocationApi from "./location_api.js";
// import Dom from "./dom.js"

// console.log("Проверка связи");



// // >>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<

// let myLocation = new LocationApi(),
//     myResult = new Dom(),
//     btn = document.getElementById("btn");


// btn.addEventListener("click", () => {
//     myResult.showPreloader();
//     myLocation.getMyIp()
//         .then(res => myLocation.getMyLocation(res.ip))
//         .then(res => myResult.setCoordinates(res))
//         .then(res => myResult.hidePreloader())
// });


import LocationApi from './location_api';
import Dom from './dom';

const locationApi = new LocationApi();
const dom = new Dom();

dom.showPreloader();
locationApi.getMyIp()
  .then((res) => {
    return locationApi.getMyLocation(res.ip)
  })
  .then((res) => {
    dom.hidePreloader();
    dom.setCoordinates(JSON.stringify(res));
  })
  .catch((eror) => {
    console.log(eror);
  });