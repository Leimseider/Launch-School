let turk = {
  firstName: 'Christopher',
  lastName: 'Turk',
  occupation: 'Surgeon',
  getDescription() {
    return this.firstName + ' ' + this.lastName + ' is a '
                                  + this.occupation + '.';
  }
};

let turkFunction = turk.getDescription.bind(turk);

function logReturnVal(func) {
  let returnVal = func();
  console.log(returnVal);
}

logReturnVal(turkFunction);