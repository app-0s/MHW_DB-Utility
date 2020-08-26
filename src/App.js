import * as React from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { ArmorData } from './components/ArmorData';
import { ArmorSearch } from './components/armor/ArmorSearch';
import './custom.css';

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(Layout, null,
            React.createElement(Route, { exact: true, path: '/', component: ArmorSearch }),
            React.createElement(Route, { path: '/armor-search', component: ArmorSearch }),
            React.createElement(Route, { path: "/home", component: Home }),
            React.createElement(Route, { path: '/armor-data', component: ArmorData })));
    };
    App.displayName = App.name;
    return App;
}(React.Component));
export default App;
// Note: Have to setup webpack/typescript transpilation within vsco/vscommunity 2019
