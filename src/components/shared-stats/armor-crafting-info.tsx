import CraftingCost from './crafting-cost';

export default class ArmorCraftingInfo {
    materials: CraftingCost[];

    constructor(dataObj?: any) {
        this.materials = dataObj && dataObj.materials || NaN;
    }
}