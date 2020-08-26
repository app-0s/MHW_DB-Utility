import * as React from 'react';
import Armor from './armor/Armor'
import Defense from './shared-stats/defense.js';
import { Table, Container, Row, Col } from 'reactstrap';
import Resistances from './shared-stats/resistances.js';
import ArmorAttributes from './shared-stats/armor-attributes.js';
import SkillRank from './shared-stats/skill-rank.js';

interface IProps { 
    location: any,
    dataObj: any
}

interface IState {
    //armorId: number
    armorState: Armor,
    loading: boolean;
}

export class ArmorData extends React.Component<IProps, IState> {
    static displayName = ArmorData.name;
    constructor(props: IProps) {
        super(props);

        this.state = {
            //armorId: this.props.location.state.armorId,
            armorState: new Armor(null),
            loading: true
        };
    }
    //
    componentDidMount() {
        console.log("Location State?" + this.props.location.state);
        console.log("Armor Id: " + this.props.location.state.armorId);
        this.getArmorData();
    }

    // Table of Armor stats
    // Note: will break out certain parts into subtable areas
    // I think this is made static to prevent having to bind it
    static renderArmorStats(armor: Armor) {
        return (
            <Container>
                <Row>
                    <Col>
                        <Table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>Name: </th>
                                    <th>{armor.name} </th>
                                </tr>
                                {
                                    //<tr>
                                    //<th>Stat</th>
                                    //<th>Value</th>
                                    //</tr>
                                }
                        </thead>
                        <tbody>
                    
                            <tr>
                                <td>Type:</td>
                                <td>{armor.type} </td>
                            </tr>
                            <tr>
                                <td>Rank:</td>
                                <td>{armor.rank} </td>
                            </tr>
                            {
                            //<tr>
                            //    <td>Resistances:</td>
                            //    <td>{armor.resistances} </td>
                            //</tr>
                            }
                            {
                            //<tr>
                            //    <td>Attributes:</td>
                            //    <td>{armor.attributes} </td>
                            //</tr>   
                            }
                        </tbody>
                        </Table>
                    </Col>
                </Row>
                {/*Render Defensive Stats*/}
                <Row>
                    <Col>{ArmorData.renderArmorDefense(armor.defense)}</Col>
                    <Col>{ArmorData.renderArmorResistances(armor.resistances)}</Col>
                </Row>
                <Row>
                    <Col>{ArmorData.renderArmorSkills(armor.skills)}</Col>
                    {/*<Col></Col>*/}
                </Row>
            </Container>
        );
    }
    // TODO: Would like show set info on side IF a set armor is a part of set  
    static renderArmorDefense(defense?: Defense) {
        return (
            <Table className="table table-striped">
                <thead>
                    <tr>
                        <th>Defenses</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Base:</td>
                        <td>{defense?.base} </td>
                    </tr>
                    <tr>
                        <td>Max:</td>
                        <td>{defense?.max} </td>
                    </tr>
                    <tr>
                        <td>Augmented:</td>
                        <td>{defense?.augmented} </td>
                    </tr>
                </tbody>
            </Table>
        )
    }

    static renderArmorResistances(resistances?: Resistances) {
        return(
            <Table className="table table-striped">
                <thead>
                    <tr>
                        <th>Resistances</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Fire:</td>
                        <td>{resistances?.fire} </td>
                    </tr>
                    <tr>
                        <td>Water:</td>
                        <td>{resistances?.water} </td>
                    </tr>
                    <tr>
                        <td>Ice</td>
                        <td>{resistances?.ice} </td>
                    </tr>
                    <tr>
                        <td>Thunder:</td>
                        <td>{resistances?.thunder} </td>
                    </tr>
                    <tr>
                        <td>Dragon</td>
                        <td>{resistances?.dragon} </td>
                    </tr>
                </tbody>
            </Table>
        )
    }

    static renderArmorSkills(skills?: SkillRank[]) {
        return (
            <Table className="table table-striped">
                <thead>
                    <tr>
                        <th>Skills</th>
                        {/* <th>Modifiers</th> */}
                    </tr>
                </thead>
                <tbody>
                    {skills?.map(skill =>
                        <tr key={skill.id} >
                            <td>{skill.skillName}</td>
                            <td>Level {skill.level}</td>
                        </tr>
                    )}
                    
                    {/* Will have to render modifiers based on which values are not 0/null */}
                </tbody>
            </Table>
            )
    }

    render()
    {
        let contents = this.state.loading ?
            <p><em>Loading...</em></p> :
            ArmorData.renderArmorStats(this.state.armorState); //

        return (
            <div>
                <p> Armor Data </p>
                {contents}
            </div>
        );
    }

    async getArmorData()
    {
        if (this.props.location.state.armorId == null) {
            console.log("Armor Id is null/undefined");
            return;
        }

        try {
            // Call id route for armor
            // todo ADD ENVIRONMENT CHECK AND URL READ FROM CONFIG
            const response = await fetch('http://localhost:52621/armor/id/' + this.props.location.state.armorId); // Initially thinking this is same name as armorcontroller
            
            const data = await response.json();
            //await console.log("Data response: " + response.status);
            console.log(data);
            //console.log(response.json());   //NOTE: json is a method, correct with data above, and fix resulting react issue
            //console.log(response.text);
            this.setState({
                armorState: new Armor(data)
                , loading: false
            });
            //console.log(this.state.armor)
        } catch (err) {
            console.log("Error: " + err);
        }        
        
    }

}

/* Try this after initially getting it working 
 * 
 * <tbody>
           {this.state.armor.map(this.state.armor.keys?)}
<tr>
    <td> </td>
    <td>{this.state.armor.rank} </td>
</tr>
                    )}
                </tbody >

*/