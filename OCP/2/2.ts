class DiscountCalculatory {
  calculateDiscount(userType: ICalculator) {
    return userType.calculate() * 0,5;
  }
}


interface ICalculator {
  calculate (): number 
}

class calculatorPremium implements ICalculator {
  calculate(): number {
    return 20;
  }
}

class calculatorRegular implements ICalculator {
  calculate(): number {
    return 10;
  }
}

class calculatorNoDiscont implements ICalculator {
  calculate(): number {
    return 0;
  }
}

const discont = new DiscountCalculatory();
discont.calculateDiscount(new calculatorPremium())

console.log(discont)
