import {baseUrl} from '../constant'
import ConnexionService from './ConnexionService'
import {AsyncStorage} from 'react-native';

class BaseService {

    constructor(URL) {
        this.URL = baseUrl + URL
    }
    
    async checkValidToken(res) {
        let cs = new ConnexionService()
        if (!res.error) {
            return res
        } else if(cs.isConnected()) {
            cs.disconnect()
        }
    }

    async getAll() {
        let response = await fetch(
            this.URL,
            {
                method:"GET",
                headers: { 
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + await AsyncStorage.getItem("token")
                }
            }
        )
        return this.checkValidToken(await response.json())
    }

    async getById(id) {
        let response = await fetch(
            this.URL += "/id/" + id,
            {
                method:"GET",
                headers: { 
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + await AsyncStorage.getItem("token")
                }
            }
        )
        return this.checkValidToken(await response.json())
    }

    async add(item) {
        let response = await fetch(
            this.URL,
            {
                method:"POST",
                headers: { 
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + await AsyncStorage.getItem("token")
                },
                body: JSON.stringify(item)
            }
        )
        return this.checkValidToken(await response.json())
    }

    async update(item) {
        let response = await fetch(
            this.URL,
            {
                method:"PUT",
                headers: { 
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + await AsyncStorage.getItem("token")
                },
                body: JSON.stringify(item)
            }
        )
        return this.checkValidToken(await response.json())
    }

    async delete(id) {
        let response = await fetch(
            this.URL += "/" + id,
            {
                method:"DELETE",
                headers: { 
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + await AsyncStorage.getItem("token")
                }
            }
        )
        return this.checkValidToken(await response.json())
    }
}

export default BaseService