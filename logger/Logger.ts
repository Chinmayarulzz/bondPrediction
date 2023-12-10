const fs = require('fs');
const fsPromises = fs.promises;

class ILogger{

    today: Date;

    constructor(){
        this.today = new Date();
    }

    error(log: any): void{
        const fileName = "logs/"+"development/" + this.today.getFullYear()+"-"+(this.today.getMonth()+1)+"-"+this.today.getDate()+".txt";
        log = "" + new Date() + '\n' + JSON.stringify(log) + '\n\n';
        fsPromises.appendFile(fileName, log)
            .then(()=>{
                console.log(log);
            })
            .catch((e: any)=>{
                console.error(e);
                this.error(e);
            });
    }

    async log(log: any={}): Promise<void>{
        const fileName = "logs/"+"development/" + this.today.getFullYear()+"-"+(this.today.getMonth()+1)+"-"+this.today.getDate()+".txt";
        log = "" + new Date() + '\n' + JSON.stringify(log) + '\n\n';
        await fsPromises.appendFile(fileName, log)
            .then(()=>{
                console.log(log);
            })
            .catch((e: any)=>{
                this.error(""+new Date()+'\n'+e+'\n');
            });
    }

}

export let Logger = new ILogger();