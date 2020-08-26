export default class SetInfo {
    id: number;
    name: string;
    rank: string;
    pieces: number[];

    constructor(dataObj?: any) {
        this.id = dataObj && dataObj.id || NaN;
        this.name = dataObj && dataObj.name || NaN;
        this.rank = dataObj && dataObj.rank || NaN;
        this.pieces = dataObj && dataObj.pieces || NaN;
    }
}