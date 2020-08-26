export interface IDefense {
    base: number;
    max: number;
    augmented: number;
}

export default class Defense {
    base: number;
    max: number;
    augmented: number;

    // NOTE: May have to use something other than NaN
    constructor(dataObj?: IDefense) {
        this.base = dataObj && dataObj.base || NaN;  // Falsy check (dataobj is null, base isnull)
        this.max = dataObj && dataObj.max || NaN;
        this.augmented = dataObj && dataObj.augmented || NaN;
    }
}