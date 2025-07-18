interface IValidatorStrateg{
  validate(value: string): boolean
}

class ValidatorEmail implements IValidatorStrateg{
  validate(value: string): boolean {
    return /\S+@\S+\.\S+/.test(value);
  }
}

class ValidatorPhone implements IValidatorStrateg {
  validate(value: string): boolean {
    return /^\d{10}$/.test(value);
  }
}

class ValidatorStrateg {
  private strategies: Record<string, IValidatorStrateg> = {}

  addstrategy(field: string, strategy: IValidatorStrateg) {
    this.strategies[field] = strategy
  }

  validate(field: string, value: string): boolean {
    const strategy = this.strategies[field];
    if(!strategy) {
      throw new Error(`No validator found for field: ${field}`);
    }
    return strategy.validate(value);
  }

}
