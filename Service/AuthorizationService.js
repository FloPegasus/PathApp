import {baseUrl} from '../constant'

class AuthorizationService {
    constructor() {
        this.URL = baseUrl + "auth"
    }

    async getChallenge(mail) {
        let res = await fetch(
            this.URL + "?email=" + mail,
            {
                method:"GET",
                headers: { 
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            }
        )
        return await res.json()
    }

    async getToken(response) {
        let res = await fetch(
            this.URL,
            {
                method:"POST",
                headers: { 
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(response)
            }
        )
        return await res.json()
    }
}

export default AuthorizationService;