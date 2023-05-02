#! /usr/bin/env node
import { input } from "./user.js";
import chalk from "chalk";
class Person
{
    personality:string="mystery";
    askquestion(answer:number)
    {
        if(answer==1)
        {
            this.personality="extrovert";

        }
        else if(answer==2)
        {
            this.personality="introvert";
        }
    }
    getresult()
    {
        console.log(chalk.yellow.bold(`you are an ${this.personality}`));
    }

}

class Student 
{
    name:string;
    personality:Person;
    constructor(name:string,personality:Person)
    {
        this.name=name;
        this.personality=personality;
    }

}

let obj= new Person();
let option=await input();
obj.askquestion(option);
obj.getresult();
let obj2=new Student("talha",obj)
console.log(obj2);
