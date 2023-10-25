import { AppState } from "../AppState"
import { House } from "../models/House"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"


class HousesService {
  async getHouses() {
    const res = await api.get('api/houses')
    // logger.log('got houses', res.data)
    AppState.houses = res.data.map(pojo => new House(pojo))
  }

  async getHouseById(houseId) {
    const res = await api.get(`api/houses/${houseId}`)
    // logger.log('got house', res.data)
    AppState.activeHouse = new House(res.data)
  }

  clearData() {
    AppState.activeHouse = null
  }
}

export const housesService = new HousesService()