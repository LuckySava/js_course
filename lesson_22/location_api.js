// export default class LocationApi {
//     // constructor() {
//     // }
//     getMyIp() {
//         fetch("https://api.ipify.org?format=json")
//         .then(res => {
//             // if(res.status >= 200 && res.status <= 300) {
//             //     return res.json();
//             // }
//             if(res.status === 200) {
//                 return res.json();
//             } else {
//                 throw new Error('error ip')
//             }
            
//         })
//         .catch(error => console.log("We have some problem with it"));
//     }
//     getMyLocation(ip) {
//         fetch("https://freegeoip.net/json/{ip}")
//             .then(res => {
//                 // if(res.status >= 200 && res.status <= 300) {
//                 //     return res.json();
//                 // }
//                 if(res.status === 200) {
//                     return res.json();
//                 } else {
//                     return Promise.reject(res.status)
//                 }

//             })
//             .catch(error => console.log("We have some problem with it"));
//     }

// }

export default class LocationApi {
    getMyIp() {
      return fetch('https://api.ipify.org?format=json', {
        method: 'GET',
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
  
          return Promise.reject(res.status);
        });
    }
  
    getMyLocation(ip) {
      return fetch(`https://freegeoip.net/json/${ip}`, {
        method: 'GET',
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
  
          return Promise.reject(res.status);
        });
    }
  }