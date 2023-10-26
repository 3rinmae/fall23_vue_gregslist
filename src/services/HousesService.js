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

  async createHouse(houseData) {
    const res = await api.post('api/houses', houseData)
    logger.log('created house', res.data)
    AppState.houses.push(new House(res.data))
  }
}

export const housesService = new HousesService()