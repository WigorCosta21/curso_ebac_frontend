function Property(area, price, city, numberOfBedrooms) {
  this.area = area
  this.price = price
  this.city = city
  this.numberOfBedrooms = numberOfBedrooms
  this.parkingSpaces = false

  this.getPricePerSquareMeter = function () {
    const pricePerSquareMeter = this.price / this.area
    console.log(`O preço por metro quadrado: R$${pricePerSquareMeter}`)
  }
}


function House(area, price, city, numberOfBedrooms) {
  Property.call(this, area, price, city, numberOfBedrooms)

  this.calculateIptu = function () {
    const iptuRate = 0.02
    const iptu = this.price * iptuRate
    console.log(`O IPTU desse imóvel é de R$${iptu}`)
  }

}

function Apartment(area, price, city, numberOfBedrooms) {
  Property.call(this, area, price, city, numberOfBedrooms)

  this.getCalculateCondominiumFee = function () {
    const condominium_fee_per_square_meter = 10
    const condominium_fee = this.area * condominium_fee_per_square_meter

    console.log(`O valor do condomínio é R$${condominium_fee}`)
  }
}

const house1 = new House(200, 500000, 'São Paulo', 3)
const apt1 = new Apartment(50, 25000, 'Rio de Janeiro', 2)
const apt2 = new Apartment(100, 750000, 'São Paulo', 3)

console.log(house1)
house1.getPricePerSquareMeter()
house1.calculateIptu()



console.log(apt1)
apt1.getPricePerSquareMeter()
apt1.getCalculateCondominiumFee()

console.log(apt2)
apt2.getPricePerSquareMeter()
apt2.getCalculateCondominiumFee()