let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};
let munstersArray = Object.entries(munsters);

munstersArray.forEach((element) => {
  let capitalizedName = (element[0][0].toUpperCase() + element[0].slice(1));
  let objectAge = element[1].age;
  let objectGender = element[1].gender;
  console.log(`${capitalizedName} is a ${objectAge}-year-old ${objectGender}.`);
});


// output = (Name) is a (age)-year-old (male or female).