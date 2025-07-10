class CheckoutService {
  constructor (
    private validateStock: ValidateStock,
    private calculeteTax: calculateTax,
    private processPayment: processPayment,
  ) {}
  processCheckout(cart: any, userId: string) {
    // Validação de estoque
    this.validateStock.execute(cart);

    // Cálculo de impostos e total
    const total = this.calculeteTax.execute(cart);
    console.log(`Total com impostos: R$${total}`);

    // Processamento de pagamento
    this.processPayment.execute(userId);
  }
}

class ValidateStock{
  execute(cart: any) {
    for(const item of cart.items) {
      if (item.stock < item.quantity) {
        throw new Error(`Produto ${item.name} sem estoque suficiente.`);
      }
    }
  }
}

class calculateTax {
  execute(cart: any) {
    let total = 0;
    for(const item of cart.item) {
      total += item.price * item.quantity;
    }
    const tax = total * 0.1;
    return total += tax;
  }
}

class processPayment{
  execute(id: any) {
    return console.log(`Processando pagamento para o usuário ${id}`)
  }
}