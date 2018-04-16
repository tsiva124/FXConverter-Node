const fixer = require('./fixer.js')

const yargs = require('yargs').command('getfx','get fx rates for a base currency, default EUR',{
    base:{
        alias : 'b',
        default : 'EUR',
        describe: 'Base currency',
        string : true
    }
})
.command('convert','convert currency from base currency to other',{
    base:{
        alias : 'b',
        demand : true,
        describe: 'Base currency',
        string : true
    },
    to:{
        alias : 't',
        demand : true,
        describe: 'To currency',
        string : true
    },
    amount:{
        alias : 'a',
        default : 1,
        describe: 'Value to convert',
        number : true
    }
})
.help()
.argv

const command = yargs._[0]

if(command === "getfx")
{
    fixer.Getfx(yargs.base)
        .then((Response) =>{
            console.log(Response);
        })
}
else if(command === "getfx") {
    fixer.Convert(yargs.base,yargs.to,yargs.amount)
        .then((Response) =>{
            console.log(`${Response.query.amount} ${Response.query.from} = ${Response.result} ${Response.query.to}`);
        })
}
else{
    console.log('No such functionality implemented yet, please check help');
}
