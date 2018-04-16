const fs = require('fs')

var GetConfig = ()=>{
    return JSON.parse(fs.readFileSync('config.json'));
}

module.exports ={
    GetConfig
}