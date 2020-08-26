
export default class ArmorAttributes {
    requiredGender: string

    constructor(dataObj?: any) {
            this.requiredGender = dataObj && dataObj.requiredGender || NaN
    }
}