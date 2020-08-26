var SetInfo = /** @class */ (function () {
    function SetInfo(dataObj) {
        this.id = dataObj && dataObj.id || NaN;
        this.name = dataObj && dataObj.name || NaN;
        this.rank = dataObj && dataObj.rank || NaN;
        this.pieces = dataObj && dataObj.pieces || NaN;
    }
    return SetInfo;
}());
export default SetInfo;
