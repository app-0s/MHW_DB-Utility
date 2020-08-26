export interface IResistance {
    fire: number,
    water: number,
    ice: number,
    thunder: number,
    dragon: number
}

export default class Resistances {
    fire: number;
    water: number;
    ice: number;
    thunder: number;
    dragon: number;

    constructor(dataObj?: IResistance) {
        this.fire = dataObj && dataObj.fire || NaN;
        this.water = dataObj && dataObj.water || NaN;
        this.ice = dataObj && dataObj.ice || NaN;
        this.thunder = dataObj && dataObj.thunder || NaN;
        this.dragon = dataObj && dataObj.dragon || NaN;
    }
}