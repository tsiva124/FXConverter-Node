const axios = require('axios')
const config = require('./readconfig.js').GetConfig()
const access_key = config.access_key
const src = config.src

var Getfx = (base) => {
    return new Promise((resolve, reject) => {axios.get(`${src}?access_key=${access_key}&base=${base}`)
    .then((response) =>{
        // console.log(`${src}?access_key=${access_key}`);
        // console.log(response);
        resolve(response);
    })
    .catch((error) => {
        reject(error);
    });
  });
}

var Convert = (base,to,amount) => {
    return new Promise((resolve, reject) => {axios.get(`${src}?access_key=${access_key}&base=${base}&to=${to}&amount=${amount}`)
    .then((response) =>{
        // console.log(`${src}?access_key=${access_key}`);
        // console.log(response);
        resolve(response);
    })
    .catch((error) => {
        reject(error);
    });
  });
}


module.exports = {
    Getfx,
    Convert
}