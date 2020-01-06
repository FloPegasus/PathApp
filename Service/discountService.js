import BaseService from './BaseService'

class discountService extends BaseService {
    constructor() {
        super("discount")
    }

    async getByName(name) {
        let response = await fetch(
            this.URL += "/name/?name=" + name,
            {
                method:"GET",
                headers: { 
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token")
                }
            }
        )
        return this.checkValidToken(await response.json())
    }

}

export default discountService;
