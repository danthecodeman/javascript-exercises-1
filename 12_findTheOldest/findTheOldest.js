const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();

  const oldestPerson = people.reduce((oldest, person) => {
    const personAge = person.yearOfDeath
      ? person.yearOfDeath - person.yearOfBirth
      : currentYear - person.yearOfBirth;
    const oldestPersonAge = oldest.yearOfDeath
      ? oldest.yearOfDeath - oldest.yearOfBirth
      : currentYear - oldest.yearOfBirth;

    return personAge > oldestPersonAge ? person : oldest;
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
