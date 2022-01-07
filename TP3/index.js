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

// Exercice 6 

async function axiosExecute(){

  const apiUrl = "https://swapi.py4e.com/api/";

  try {
    const response = await axios.get(`${ apiUrl }/starships/10`);
    console.log("starship id 10", response.data);
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await axios.get(`${ apiUrl }/planets`);
    console.log("planets", response.data.count);
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await axios.get(`${ apiUrl }/people?search=Darth  Vader`);
    console.log("people Darth Vader", response.data.results[0].birth_year);
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await axios.get(`${ apiUrl }/people/13?format=wookiee`);
    console.log("Peooplewookiee", response.data);
  } catch (error) {
    console.log(error);
  }

  try {
    const response = await axios.get(`${ apiUrl }/people?search=r2-d2`);
    const responseHomeworld = await axios.get(response.data.results[0].homeworld);
    console.log("R2-D2 Homeworld", responseHomeworld);
  } catch (error) {
    console.log(error);
  }
}

axiosExecute();



