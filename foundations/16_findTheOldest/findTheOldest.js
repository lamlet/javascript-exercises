const findTheOldest = function(people) {
    let oldestPerson = people[0];
    for (let person of people) {
        if (person.yearOfDeath && oldestPerson.yearOfDeath) {
            let personAge = person.yearOfDeath - person.yearOfBirth;
            let oldestAge = oldestPerson.yearOfDeath - oldestPerson.yearOfBirth;
            if (personAge > oldestAge) {
                oldestPerson = person;
            }
        } else {
            if (person.yearOfBirth < oldestPerson.yearOfBirth) {
                oldestPerson = person;
            }
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
