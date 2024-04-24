//write a class to calculate the Uber price.
class UberPriceCalculator {
    constructor(baseFarePerKm, surgeMultiplier) {
      this.baseFarePerKm = baseFarePerKm;
      this.surgeMultiplier = surgeMultiplier;
    }
  
    calculatePrice(distanceInKm) {
      const price = distanceInKm * this.baseFarePerKm * this.surgeMultiplier;
      return price;
    }
  }
  
  
  const calculator = new UberPriceCalculator(1.5, 1.2); 
  const distance = 10; 
  const price = calculator.calculatePrice(distance);
  console.log(`The price for a ${distance} km Uber ride is $${price.toFixed(2)}.`);
  