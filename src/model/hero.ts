export class Hero {
    heroID: number;
    name: string;
    powers: string[];

    constructor(heroID:number, name:string, powers:string[]){
        this.heroID = heroID;
        this.name = name;
        this.powers = powers;
    }
}