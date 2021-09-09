interface Player {
    name: string,
    club: string,
    salary: number,
    age: number,
    wifi?: string,
    previousClubs?: string
}

const messi: Player = {
name:'Leo Massi',
club:'psg',
salary:150000,
age:35,
wifi:'sukona bagum',
previousClubs: 'barcalona'

}

const afif: Player = {
    name:'afif ahmed',
    club:'Shaik Racel',
    salary:12000,
    age:25
}



interface Developer extends Employee {
    language: string,
    CodeEiditor : string,
    typeSpeed?: number
}    

interface Employee {
    name: string,
    salary: number,
    age: number
}


const zuku :Developer = {
    name:'Mark Zakarbag',
    salary:100000,
    age:30,
    language:'js',
    CodeEiditor:'vs code',
    typeSpeed:50
}