import * as React from 'react';
import Armor from './Armor'
import Defense from '../shared-stats/defense.js';
import { Table, Container, Row, Col, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Resistances from '../shared-stats/resistances.js';
import ArmorAttributes from '../shared-stats/armor-attributes.js';
import SkillRank from '../shared-stats/skill-rank.js';

// Images
import DragonBlight from '../../imgs/status-effect/DragonBlight_Icon.png';
import FireBlight from '../../imgs/status-effect/Fireblight_Icon.png';
import IceBlight from '../../imgs/status-effect/Iceblight_Icon.png';
import ThunderBlight from '../../imgs/status-effect/Thunderblight_Icon.png';
import WaterBlight from '../../imgs/status-effect/Waterblight_Icon.png';
import { loading } from '../loading/DisplayLoadingSpinner'

// css
import effectStyle from '../../imgs/status-effect/effects.module.css';
import  '../slides.css';

interface IProps { 
    location: any,      // route location which holds prop data through location.state
    armorSearch?: string,
    dataObj: any
}

interface IState {
    //armorId: number
    armorState: Armor,
    prevArmorSearch?: string,
    loading: boolean;
}

export class ArmorData extends React.Component<IProps, IState> {
    static displayName = ArmorData.name;
    constructor(props: IProps) {
        super(props);

        this.state = {
            //armorId: this.props.location.state.armorId,
            armorState: new Armor(null),
            prevArmorSearch: this.props.location.state.armorSearch,
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
                                    {/* <th>Name: </th> */}
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
                    <Col className="div.relative">{ArmorData.renderArmorResistances(armor.resistances)}</Col>
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
                        <td><img src={FireBlight} alt="Fire.jpg" className={effectStyle.effect} title={'Fire'}></img></td>
                        <td>{resistances?.fire} </td>
                    </tr>
                    <tr>
                        <td><img src={WaterBlight} alt="Water.jpg" className={effectStyle.effect} title={'Water'}></img></td>
                        <td>{resistances?.water} </td>
                    </tr>
                    <tr>
                        <td><img src={IceBlight} alt="Ice.jpg" className={effectStyle.effect} title={'Ice'}></img></td>
                        <td>{resistances?.ice} </td>
                    </tr>
                    <tr>
                        <td><img src={ThunderBlight} alt="Thunder.jpg" className={effectStyle.effect} title={'Thunder'}></img></td>
                        <td>{resistances?.thunder} </td>
                    </tr>
                    <tr>
                        <td><img src={DragonBlight} alt="Dragon.jpg" className={effectStyle.effect} title={'Dragon'}></img></td>
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
                            <td>{skill.description}</td>
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
            loading :
            ArmorData.renderArmorStats(this.state.armorState); //

        return (
            <div>
                <p  style={{display: 'flex', justifyContent: 'right'}}>Armor Data </p>

                  {/* <NavLink tag={Link} className="text-dark" to="/armor-search">Return to {this.state.prevArmorSearch} Results</NavLink> */}
                  <Link to=
                        {{
                            pathname: "/armor-search",
                            state: { 
                                armorSearch: this.state.prevArmorSearch
                            }
                        }} 
                        
                        style={{display: 'flex', justifyContent: 'right'}}>
                        Return to {this.state.prevArmorSearch} Results
                    </Link>

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