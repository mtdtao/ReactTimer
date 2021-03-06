var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Countdown = require('Countdown');
var About = require('About');
var Timer = require('Timer');

// Load foundation
// require('style!css!foundation-sites/dist/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/countdown" component={Countdown}/>
            <Route path="/about" component={About}/>
            <IndexRoute component={Timer}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
