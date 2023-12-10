class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    residents = [];

    addResident(resident) {
        this.residents.push(resident);
    }
}

class House {
    apartments = [];

    constructor(maxApartments) {
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length >= this.maxApartments) {
            console.log("Reached maximum apartments limit!");
        } else {
            this.apartments.push(apartment);
        }
    }
}

const person1 = new Person("Ivan", "male");
const person2 = new Person("Misha", "male");
const person3 = new Person("Alena", "female");

const apart1 = new Apartment();
const apart2 = new Apartment();
const apart3 = new Apartment();
const apart4 = new Apartment();

apart1.addResident(person1);
apart2.addResident(person2);
apart3.addResident(person3);

const house1 = new House(3);

house1.addApartment(apart1);
house1.addApartment(apart2);
house1.addApartment(apart3);
house1.addApartment(apart4);

console.log(house1);