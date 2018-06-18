export default class LocationApi {
    getMyIp() {
        return fetch("https://api.ipify.org?format=json")
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error(res.status)
            }
        })

    }
    getMyLocation(ip) {
        return fetch(`https://freegeoip.net/json/${ip}`)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                throw new Error(res.status)
            }
        })
    }

}