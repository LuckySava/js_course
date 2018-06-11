class LocationApi {
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
    }
    getMyLocation() {
        fetch("https://freegeoip.net/json/{your_ip}")
            .then(res => {
                if(res.status >= 200 && res.status <= 300) {
                    return res.json();
                }
                return Promise.reject(res.status)
            })
    }

};
