/*It returns an invoice object, with phone and internet properties, and a total method.
The default value for the phone service is 3000, and the internet service is 5500 (in cents, of course!).
The function takes an object argument whose attributes override the default values.
*/


function createInvoice(services = {}) {
  if (services.phone === undefined) {
    services.phone = 3000;
  }
  if (services.internet === undefined) {
    services.internet = 5500;
  }
  services.total = function() {
    return services.phone + services.internet;
  };
  return services;
}

function invoiceTotal(invoices) {
  let total = 0;

  for (let index = 0; index < invoices.length; index += 1) {
    total += invoices[index].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({
  phone: 1000,
  internet: 4500,
}));

console.log(invoiceTotal(invoices)); // 31000