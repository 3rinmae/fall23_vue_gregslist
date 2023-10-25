export class House {
  constructor(data) {
    this.id = data.id || data._id
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.levels = data.levels
    this.imgUrl = data.imgUrl || 'https://st4.depositphotos.com/14953852/24787/v/450/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.creatorId = data.creatorId
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.creator = data.creator
  }
}


const houseData = {
  "_id": "6525c5f232075d7542770e8f",
  "bedrooms": 4,
  "bathrooms": 3,
  "levels": 2,
  "imgUrl": "https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWF",
  "year": 1995,
  "price": 350000,
  "description": "this house is very nice ",
  "creatorId": "6525b372d5ecc291608d0932",
  "createdAt": "2023-10-10T21:45:22.233Z",
  "updatedAt": "2023-10-10T21:45:22.233Z",
  "__v": 0,
  "creator": {
    "_id": "6525b372d5ecc291608d0932",
    "name": "ryan",
    "picture": "https://s.gravatar.com/avatar/1e4f8a3ddaa5065089f160acb05d8ab8?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fry.png",
    "id": "6525b372d5ecc291608d0932"
  },
  "id": "6525c5f232075d7542770e8f"
}
