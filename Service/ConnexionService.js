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
        window.location.href = "/"
    }
    
}

export default ConnexionService