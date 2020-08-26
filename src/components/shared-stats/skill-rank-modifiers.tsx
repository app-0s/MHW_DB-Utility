export default class SkillRankModifiers {
    affinity: number;
    attack: number;
    damageFire: number;
    damageWater: number;
    damageIce: number;
    damageThunder: number;
    damageDragon: number;
    defense: number;
    health: number;
    sharpnessBonus: number;
    resistAll: number;
    resistFire: number;
    resistWater: number;
    resistIce: number;
    resistThunder: number;
    resistDragon: number;

    constructor(dataObj?: any) {
            this.affinity = dataObj && dataObj.affinity || NaN;
            this.attack = dataObj && dataObj.attack || NaN;
            this.damageFire = dataObj && dataObj.damageFire || NaN;
            this.damageWater = dataObj && dataObj.damageWater || NaN;
            this.damageIce = dataObj && dataObj.damageIce || NaN;
            this.damageThunder = dataObj && dataObj.damageThunder || NaN;
            this.damageDragon = dataObj && dataObj.damageDragon || NaN;
            this.defense = dataObj && dataObj.defense || NaN;
            this.health = dataObj && dataObj.health || NaN;
            this.sharpnessBonus = dataObj && dataObj.sharpnessBonus || NaN;
            this.resistAll = dataObj && dataObj.resistAll || NaN;
            this.resistFire = dataObj && dataObj.resistFire || NaN;
            this.resistWater = dataObj && dataObj.resistWater || NaN;
            this.resistIce = dataObj && dataObj.resistIce || NaN;
            this.resistThunder = dataObj && dataObj.resistThunder || NaN;
            this.resistDragon = dataObj && dataObj.resistDragon || NaN;
        
    }
}