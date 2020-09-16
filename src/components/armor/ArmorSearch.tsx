import * as React from 'react';
import Armor from './Armor.js';
import ArmorSearchResultsDisplay from './ArmorSearchResultDisplay';
import { Button, Col, Form, FormGroup, Input, Label, Spinner } from 'reactstrap';
import { createBrowserHistory } from 'history';
import { Console } from 'console';
import { loading } from '../loading/DisplayLoadingSpinner'

const history = createBrowserHistory();
//
interface IProps {
    location?: any,
    armor: Armor
}

interface IState {
    armorSearchText: string,
    armorSearchResults: Armor[],
    searchLoading: boolean,
    resultDisplay: boolean;
}

// TODO: Provide advanced search capabilities (i.e. base defence > 50, type = head, etc)
export class ArmorSearch extends React.Component <IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            armorSearchText: '',
            armorSearchResults: [],
            searchLoading: false,
            resultDisplay: false
        }

        


        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    // once mounted, check to see if location is null and operate accordingly
    async componentDidMount(){
        if(this.props.location !== undefined && this.props.location.state !== undefined){


            await this.setState({
                armorSearchText: this.props.location.state.armorSearch,
                searchLoading: true,
                resultDisplay: true
            });

            // console.log(this.state.armorSearchText);

            this.getArmorQueryResults();
        }
    }


    handleChange(event: any){
        this.setState({
            armorSearchText: event.target.value,
        });

    }

    handleSubmit(event: any){
        this.setState({
            searchLoading: true,
            resultDisplay: true
        }) //TODO: Figure out way to display loading after resultDisplay is set

        // Make call to controller
        this.getArmorQueryResults();
        
        event.preventDefault();
    }

    async getArmorQueryResults(){
        try {
            // console.log('Load State: ' + this.state.searchLoading);

            // include wildcard searches for now
            // todo ADD ENVIRONMENT CHECK AND URL READ FROM CONFIG
            const response = await fetch('http://localhost:52621/armor/search/armor/qname=' + this.state.armorSearchText); // Initially thinking this is same name as armorcontroller
            
            const data = await response.json();

            this.setState({
                armorSearchResults: data,    // Ensure this is array of armor objects
                searchLoading: false
            })
        } catch(err){
            console.log("Error: ", err);
        }
    }

    // Form may be moved to a seperate class
    render(){
         let contents = <p> </p>;
         
         // Display results 
         if(this.state.resultDisplay){
             contents = this.state.searchLoading ? 
             loading :
             <ArmorSearchResultsDisplay armorSearchResults={this.state.armorSearchResults} armorSearchString={this.state.armorSearchText} /> 
         }
        // console.log('Load State: ' + this.state.searchLoading);
       
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label for="armorName">Armor Name</Label>
                        <Col>
                            <Input type="text" name="armorInput" id="armorName" value={this.state.armorSearchText} onChange={this.handleChange} />
                        </Col>
                        <Button type="submit">Search</Button>
                    </FormGroup>
                        
                </Form>

                <hr />
                {contents}
            </div>
        )
    }
}