import SkillRankModifiers from './skill-rank-modifiers';

export default class SkillRank {
    id: number;
    slug: string;
    level: number;
    description: string;
    skill: number;
    skillName: string;
    modifiers: SkillRankModifiers;

    constructor(dataObj?: any){
        this.id = dataObj && dataObj.id || NaN
        this.slug = dataObj && dataObj.slug || NaN
        this.level = dataObj && dataObj.level || NaN
        this.description = dataObj && dataObj.description || NaN
        this.skill = dataObj && dataObj.skill || NaN
        this.skillName = dataObj && dataObj.skillName || NaN
        this.modifiers = dataObj && dataObj.modifiers || NaN
    }
}

