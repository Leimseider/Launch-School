function createPayment(services = {}) {
  if (services.phone === undefined) {
    services.phone = 0;
  }
  if (services.internet === undefined) {
    services.internet = 0;
  }

  return services;
}

// eslint-disable-next-line max-lines-per-function
function createInvoice(services = {}) {
  if (services.phone === undefined) {
    services.phone = 3000;
  }
  if (services.internet === undefined) {
    services.internet = 5500;
  }
  services.payment = 0;
  services.addPayment = function(payment) {
    let self = this;
    for (let prop in payment) {
      self.payment += payment[prop];
    }
  };

  services.addPayments = function(array) {
    let self = this;
    array.forEach((element) => {
      for (let prop in element) {
        self.payment += element[prop];
      }
    });

    services.amountDue = function() {
      let self = this;
      return self.phone + self.internet - self.payment;
    };
  };
  return services;
}

let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({ amount: 2000 });
let payment2 = createPayment({
  phone: 1000,
  internet: 1200
});

let payment3 = createPayment({ phone: 1000 });

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue());       // this should return 0
console.log(invoice);