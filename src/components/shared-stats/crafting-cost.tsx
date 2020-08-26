import Item from './item';

export default class CraftingCost {
    quantity: number;
    item: Item;

    constructor(dataObj?: any) {
        this.quantity = dataObj && dataObj.quantity || NaN;
        this.item = dataObj && dataObj.item || null;
    }
}