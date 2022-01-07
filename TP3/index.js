const axios = require('axios');

// Exercice 1
const isStringMoreThan20 = (string) => {
  return new Promise((resolve, reject) => {
    return string.length >= 20 ? reject(false) : resolve(true);
  });
}

// Exercice 2

const initCompare = (a,b) => {
  return new Promise((resolve, reject) => {
    return a > b ? resolve(a - b) : reject();
  });
}


// Exercice 3

const getIsMajor = (string) => {
  return new Promise((resolve, reject) => {

    let date = string.split('/');
    const today = new Date();
    const birthDate = new Date(date[2], date[1], date[0]);

    return Math.floor((today-birthDate)/31557600000) < 18 ? reject('You\'re minor') : resolve(true);
  });
}

// Exercice 4 use then & catch

isStringMoreThan20('Hello !')
.then((response) => console.log(response))
.catch((error) => console.log(error));

initCompare(9, 2)
.then((response) => console.log(response))
.catch((error) => console.log(error));

getIsMajor('01/04/1998')
.then((response) => console.log(response))
.catch((error) => console.log(error));



// Exercice 5
async function execute(){
  try {
    const isMoreThan20 = await isStringMoreThan20('Hello !');
      console.log(isMoreThan20);
  }
    catch (error) {
      console.log(error);
  }
  
  try {
    const getdiff = await initCompare(4, 5);
    console.log(getdiff);
  }
    catch (error) {
      console.log(error);
  }
  
  try {
    const isMajor = await getIsMajor('01/04/1998');
    
    console.log(isMajor);
  }
    catch (error) {
      console.log(error);
  }
}

execute();


