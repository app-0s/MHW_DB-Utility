import Defense from '../shared-stats/defense';
import Resistances from '../shared-stats/resistances';
import ArmorAttributes from '../shared-stats/armor-attributes';
import Slot from '../shared-stats/slot';
import SkillRank from '../shared-stats/skill-rank';
import SetInfo from '../shared-stats/set-info';
import ArmorCraftingInfo from '../shared-stats/armor-crafting-info';

export default class Armor  {
	// Properties
	id?: number = 0;
	name?: string;
	type?: string;
	rank?: string;
	rarity?: number;
	defense?: Defense;	// Get an error with this due to object with seperate values
	resistances?: Resistances; // Get an error with this as well (object w/ values)
	attributes?: ArmorAttributes;	// same issue
	slots?: Slot[];
	skills?: SkillRank[];
	armorSet?: SetInfo; // NOTE: Can also be shown on search results, but with small standard armor outline image and hover over for name
 // NOTE: Can also be shown on search results, but with small standard armor outline image and hover over for name
	crafting?: ArmorCraftingInfo;

	constructor(dataObj: any ) {
		if (dataObj !== null) {
			this.id =  dataObj.id ;
			this.type = dataObj.type;
			this.name = dataObj.name;
			this.rank = dataObj.rank;
			this.rarity = dataObj.rarity;
			this.defense = new Defense(dataObj.defense);
			this.resistances = dataObj.resistances;
			this.attributes = dataObj.attributes;
			this.slots = dataObj.slots;
			this.skills = dataObj.skills;
			this.armorSet = dataObj.armorSet;
			this.crafting = dataObj.crafting;
		}
	}



    //constructor(id, type, name, rank, rarity, defense, resistances, attributes) {
		// Todo: Add rest of properties
		//this.id = id;
		//this.type = type;
		//this.name = name;
		//this.rank = rank;
		//this.rarity = rarity;
		//this.defense = defense;
		//this.resistances = resistances;
		//this.attributes = attributes;
			//armorProfile: {
			//	"id": 20,
			//	"type": "legs",
			//	"rank": "low",
			//	"rarity": 1,
			//	"defense": {
			//		"base": 6,
			//		"max": 42,
			//		"augmented": 72
			//	},
			//	"resistances": {
			//		"fire": 2,
			//		"water": 0,
			//		"ice": 0,
			//		"thunder": 2,
			//		"dragon": 2
			//	},
			//	"attributes": {},
			//	"name": "Bone Greaves",
			//	"slots": [],
			//	"skills": [
			//		{
			//			"id": 291,
			//			"level": 1,
			//			"modifiers": {}, // figure out how to te3ll newtonsoft to convert this to the skillrankmodifiers object
			//			"description": "Increases the chances of a corpse being left behind.",
			//			"skill": 100,
			//			"skillName": "Entomologist"
			//		}
			//	],
			//	"armorSet": {
			//		"id": 4,
			//		"rank": "low",
			//		"name": "Bone",
			//		"pieces": [
			//			16,
			//			17,
			//			18,
			//			19,
			//			20
			//		],
			//		"bonus": null
			//	},
			//	"assets": {
			//		"imageMale": "https://assets.mhw-db.com/armor/6313ff3401ad840bde1a30f0207f8dfd778597b2.84ae9eadb85dd65663fb6ff366b5662c.png",
			//		"imageFemale": "https://assets.mhw-db.com/armor/269a927a5e7002ba223797aa2cc9e55bcf542870.6ed223f6abbe87a03e1e5a80a6f3cb06.png"
			//	},
			//	"crafting": {
			//		"materials": [
			//			{
			//				"quantity": 1,
			//				"item": {
			//					"id": 147,
			//					"rarity": 3,
			//					"carryLimit": 99,
			//					"value": 30,
			//					"name": "Monster Bone S",
			//					"description": "A material found in bonepiles. Indispensable for both hunting and daily life."
			//				}
			//			},
			//			{
			//				"quantity": 1,
			//				"item": {
			//					"id": 138,
			//					"rarity": 4,
			//					"carryLimit": 99,
			//					"value": 400,
			//					"name": "Ancient Bone",
			//					"description": "A bone used as crafting material. Can be found in bonepiles in the Ancient Forest. Its size evokes a certain primal quality."
			//				}
			//			}
			//		]
			//	}
			//},
   //         loading: ''
   //     }
    //}
}