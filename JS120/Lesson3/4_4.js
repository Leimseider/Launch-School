function createPayment(services = {}) {
  if (services.phone === undefined) {
    services.phone = 0;
  }
  if (services.internet === undefined) {
    services.internet = 0;
  }

  services.total = function() {
    if (services.amount) return services.amount;
    else return services.phone + services.internet;
  };
  return services;
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000