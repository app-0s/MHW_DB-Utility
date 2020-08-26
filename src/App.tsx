import * as React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { ArmorData } from './components/ArmorData';
import { ArmorSearch } from './components/armor/ArmorSearch';
import './custom.css'


export default class App extends React.Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
        {
          // TODO: WOULD LIKE TO MOVE THIS TO A SEPERATE ROUTE FILE
            //<Route exact path='/' component={Home} />
            //<Route path='/counter' component={Counter} />
            //<Route path='/fetch-data' component={FetchData} />
            //<Route path='/armor-data' component={ArmorData} />
            //<Route exact path='/' component={ArmorData} />
            } 
        <Route exact path='/' component={ArmorSearch} />
        <Route path='/armor-search' component={ArmorSearch} />
        <Route path="/home" component={Home} />
        <Route path='/armor-data' component={ArmorData} />
        {/* <Route path='/armor-data' render={() => <ArmorData armorId={20} />} /> */}
      </Layout>
    );
  }
}

        // Note: Have to setup webpack/typescript transpilation within vsco/vscommunity 2019