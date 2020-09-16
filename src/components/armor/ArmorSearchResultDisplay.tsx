import * as React from 'react';
import { useState } from 'react';
import Armor from './Armor.js';
import { Link } from 'react-router-dom';
import {ArmorData} from './ArmorData';


interface IProps {
    armorSearchResults: Armor[],
    armorSearchString: string
}

// Link uses state and should be rendered on row creation of table
// TODO: Navlink instead of link
// hotlink row to armor data page(mouseover(highlight) and onclick?)
export default function ArmorSearchResultsDisplay(props: IProps) {
    //// React State Hook to store searchResults
    //const [armorResutls, setArmorResults] = useState(props.armorSearchResults);

    function RowClickToLink(aId: number) {
        return <Link to=
            {{
                pathname: "/armor-data",
            state: {
                armorId: aId
            }
            }} />;
    }

    //function PushSearchHistory() {
    //    history.push(`/${armorResutls}`);
    //}

    return <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Rank</th>
            </tr>
        </thead>
        <tbody>
            {props.armorSearchResults.map(armor =>

                <tr key={armor.id} >
                    <td><Link to=
                        {{
                            pathname: "/armor-data",
                            state: { 
                                armorId: armor.id,
                                armorSearch: props.armorSearchString
                            }
                        }} >{armor.name}
                    </Link></td>
                  
                    <td>{armor.type}</td>
                    <td>{armor.rank}</td>
                    
                    </tr>
                
            )}
        </tbody>
    </table>
}

// onClick={() => RowClickToLink(armor.id)}>
// Could try to add mouseover properties, which may require navlink