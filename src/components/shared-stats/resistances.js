var Resistances = /** @class */ (function () {
    function Resistances(dataObj) {
        this.fire = dataObj && dataObj.fire || NaN;
        this.water = dataObj && dataObj.water || NaN;
        this.ice = dataObj && dataObj.ice || NaN;
        this.thunder = dataObj && dataObj.thunder || NaN;
        this.dragon = dataObj && dataObj.dragon || NaN;
    }
    return Resistances;
}());
export default Resistances;
