var CraftingCost = /** @class */ (function () {
    function CraftingCost(dataObj) {
        this.quantity = dataObj && dataObj.quantity || NaN;
        this.item = dataObj && dataObj.item || null;
    }
    return CraftingCost;
}());
export default CraftingCost;
