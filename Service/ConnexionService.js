import authorizationService from './AuthorizationService';
import {Toast} from 'native-base';
import {AsyncStorage} from 'react-native';


class ConnexionService {
    getUserName() {
        return localStorage.getItem("userName")
    }
    getUserId() {
        return localStorage.getItem("userId")
    }
    isConnected() {
        return (localStorage.getItem("userName") && localStorage.getItem("userId"))
    }

    disconnect() {
        localStorage.removeItem("token")
        localStorage.removeItem("userName")
        localStorage.removeItem("userid")
    }

    async connexion(user) {
        let as = new authorizationService()
        let resChall = await as.getChallenge(user.Email)
        if (resChall.error) {
            Toast.show({
                text: 'Email incorrecte, veuillez réessayer.',
                buttonText : 'OK',
                duration: 3000,
            })
        } else {
            let hash = sha256(this.state.password)
            let response = sha256(resChall.challenge + hash + "isitech")
            let responseBody = {
                email: user.Email,
                challenge: resChall.challenge,
                response: response
            }
            let resToken = await as.getToken(responseBody)
            if (resToken.error) {
                Toast.show({
                    text: 'Mot de Passe incorrecte, veuillez réessayer.',
                    buttonText : 'OK',
                    duration: 3000,
                })
            } else {
                AsyncStorage.setItem("token", resToken.token)
                AsyncStorage.setItem("userName", resToken.userName)
                AsyncStorage.setItem("userId", resToken.userId)
            }
        }
    }
    
}

export default ConnexionService