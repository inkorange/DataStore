import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

// models
import Store from '../models/Store';

// elements

const ChildComponent = React.createClass({
    contextTypes: {
        location: React.PropTypes.object
    },

    getInitialState: function() {
        return {
            message: 'Just hanging around waiting for some action....'
        }
    },

    eventUpdateAction: function(msg) {
        this.setState('message', msg);
    },

    componentDidMount: function() {
        Store.subscribe('mycustomevent', this.eventUpdateAction);
    },

    render() {
        return (
            <section>
                {this.state.message}
            </section>
        )
    }

});

module.exports = ChildComponent;