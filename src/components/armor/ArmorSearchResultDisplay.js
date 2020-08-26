import * as React from 'react';
import { Link } from 'react-router-dom';
// Link uses state and should be rendered on row creation of table
// TODO: Navlink instead of link
// hotlink row to armor data page(mouseover(highlight) and onclick?)
export default function ArmorSearchResultsDisplay(props) {
    //// React State Hook to store searchResults
    //const [armorResutls, setArmorResults] = useState(props.armorSearchResults);
    function RowClickToLink(aId) {
        return React.createElement(Link, { to: {
                pathname: "/armor-data",
                state: {
                    armorId: aId
                }
            } });
    }
    //function PushSearchHistory() {
    //    history.push(`/${armorResutls}`);
    //}
    return React.createElement("table", { className: 'table table-striped', "aria-labelledby": "tabelLabel" },
        React.createElement("thead", null,
            React.createElement("tr", null,
                React.createElement("th", null, "Name"),
                React.createElement("th", null, "Type"),
                React.createElement("th", null, "Rank"))),
        React.createElement("tbody", null, props.armorSearchResults.map(function (armor) {
            return React.createElement("tr", { key: armor.id },
                React.createElement("td", null,
                    React.createElement(Link, { to: {
                            pathname: "/armor-data",
                            state: { armorId: armor.id }
                        } }, armor.name)),
                React.createElement("td", null, armor.type),
                React.createElement("td", null, armor.rank));
        })));
}
// onClick={() => RowClickToLink(armor.id)}>
// Could try to add mouseover properties, which may require navlink
