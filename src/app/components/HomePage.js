import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

// models
import Store    from '../models/Store';

// elements
import ChildComponent from '../elements/ChildComponent';

const HomePage = React.createClass({
    contextTypes: {
        location: React.PropTypes.object
    },

    getInitialState: function() {
        return {
            radiomessage: 'Out of the gate we have: ' + Store.getStore('menuvalues')
        }
    },    
    
    getDefaultProps: function () {
        return { 
           
        };
    },

    
    componentDidMount: function() {
        Store.subscribe('dashboardfilter', this._updateData);

        Store.subscribe('menuvalues', this._RadiosClicked)
    },
    
    _updateData: function(data) {
        console.log('The data has been updated!!!!!!! ', data);
    },

    _RadiosClicked: function(msg) {
        this.setState({radiomessage: msg});
    },
    
    loadDrawer: function(data) {
        console.log('Did my value persist in the store? : ', Store.getStore('dashboardfilter'));
        this.refs.trailerDrawer.loadDrawer(data);
    },
    
    render() {
        return (
            <article>
                <ChildComponent  />
                {this.state.radiomessage}
            </article>
        )
    }
 
});

module.exports = HomePage;