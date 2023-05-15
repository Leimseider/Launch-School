
class PlayerCharacter {
  constructor() {
    this.health = 100;
    this.strength = this.rollDice();
    this.intelligence = this.rollDice();
  }
  rollDice() {
    return Math.floor(Math.random() * 11) + 2;
  }
  heal(amount) {
    this.health += amount;
  }
  hurt(amount) {
    this.health -= amount;
  }
}

const wearsArmor = {
  attachArmor() {
    console.log(`Armor attached.`);
  },
  removeArmor() {
    console.log(`Armor removed.`);
  }
};

const spellCaster = {
  castSpell(spell) {
    console.log(`Casting ${spell}`);
  }
};

class Warrior extends PlayerCharacter {
  constructor() {
    super();
    this.strength += 2;
  }
}
Object.assign(Warrior.prototype, wearsArmor);

class Paladin extends PlayerCharacter {
  constructor() {
    super();
  }
}
Object.assign(Paladin.prototype, wearsArmor);
Object.assign(Paladin.prototype, spellCaster);


class Magician extends PlayerCharacter {
  constructor() {
    super();
    this.intelligence += 2;
  }
}
Object.assign(Magician.prototype, spellCaster);

class Bard extends Magician {
  constructor() {
    super();
  }
  createPotion() {
    console.log(`Created a potion.`);
  }
}

let vanee = new Bard();
vanee.createPotion();
vanee.castSpell('Fireball');
console.log(vanee.intelligence);