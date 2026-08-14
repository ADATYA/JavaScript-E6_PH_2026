/**
 * ------
 * SLICE
 * ------
*/

const name = "I am Bikrom Adatya Roy";
console.log(name.slice(3,7));
console.log(name.slice(7));
console.log(name.slice(3));
console.log(name.slice(-3));
console.log(name.slice(-9));

/**
 * ------
 * CONCAT
 * ------
*/

const firstName = "Bikrom Adatya";
const lastName = "Roy";
console.log(firstName + " " + lastName);
console.log(firstName,lastName);
console.log(firstName.concat(" ",lastName));

/**
 * ------
 * SPLIT
 * ------
*/
const companyName = "Delta Life Insureance Company";
const companies = companyName.split('');
const companies1 = companyName.split();
const companies2 = companyName.split(' ');
console.log(companies);
console.log(companies1);
console.log(companies2);

const comName = "Technecal Universtiy of Chemnitz";
console.log(comName.split('a'));