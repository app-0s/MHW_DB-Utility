var Item = /** @class */ (function () {
    function Item(dataObj) {
        this.id = dataObj && dataObj.id || NaN;
        this.name = dataObj && dataObj.name || ''; // Will revisit to see if I should make this null or not
        this.description = dataObj && dataObj.description || '';
        this.rarity = dataObj && dataObj.rarity || NaN;
        this.carryLimit = dataObj && dataObj.carryLimit || NaN;
        this.value = dataObj && dataObj.value || NaN;
    }
    return Item;
}());
export default Item;
