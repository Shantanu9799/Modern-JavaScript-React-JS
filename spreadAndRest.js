// spread
// array
let name = ['Shantanu', 'Poly', 'Maa Kali'];
let place = ['Gopalbera', 'Batna', 'Dakhsineswar'];
let NameAndAddress = [...name, ...place];
console.log(NameAndAddress);

// object
let myFav = {
    name1 : 'Shantanu',
    name2 : 'Poly',
    name3 : 'Maa Kali'
};
let myFavAdd = {
    add1 : "Gopalbera",
    add2 : 'Batna',
    add3 : 'Dakhsineswar'
};
let myAllFav = {...myFav, ...myFavAdd};
console.log(myAllFav);

// rest
// array
let nameArray = ['Shantanu', 'Poly', 'Maa Kali'];
let [firstname, ...rest] = nameArray;
console.log(rest);
