export class LocationApi {
    // constructor() {
    // }
    getMyIp() {
        fetch("https://api.ipify.org?format=json")
        .then(res => {
            if(res.status >= 200 && res.status <= 300) {
                return res.json();
            }
            return Promise.reject(res.status)
        })
        .catch(error => console.log("We have some problem with it"));
    }
    getMyLocation(ip) {
        fetch("https://freegeoip.net/json/{ip}")
            .then(res => {
                if(res.status >= 200 && res.status <= 300) {
                    return res.json();
                }
                return Promise.reject(res.status)
            })
            .catch(error => console.log("We have some problem with it"));
    }

};
