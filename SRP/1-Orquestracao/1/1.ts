class BookingServiceResposta {
  constructor(
    private validateDate: ValidateDate,
    private calculatePrice: CalculatePrice,
    private sendEmail: SendEmail,
  ) {}

  processBooking(bookingDetails: any) {
    // Validação das datas
    this.validateDate.execute(bookingDetails.startDate, bookingDetails.endDate);

    // Cálculo do preço total
    const totalPrice = this.calculatePrice.execute(
      bookingDetails.startDate, 
      bookingDetails.endDate, 
      bookingDetails.dailyRate
    );
    console.log(`Preço total calculado: R$${totalPrice}`);

    // Envio de confirmação por e-mail
    this.sendEmail.execute(bookingDetails.email);
  }
}

class ValidateDate {
  execute(startDate: any, endDate: any) {
    if(startDate >= endDate) {
      throw new Error('Data do check-out deve ser após a data de check-in');
    };
  }
}

class CalculatePrice {
  execute(startDate: any, endDate: any, dailyRate: any) {
    const durationInDays = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)); 
      return dailyRate * durationInDays;
  }
}

class SendEmail {
  execute(email: any) {
    return console.log(`Enviando e-mail de confirmação para ${email}`)
  }
}