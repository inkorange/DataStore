import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

// models
import Store from '../models/Store';

// elements
import Menu from '../elements/Menu';

const MainLayout = React.createClass({
    contextTypes: {
        location: React.PropTypes.object
    },
    
    getDefaultProps: function () {
    },
    
    render() {

        return (
          <section>
                <Menu />
                {this.props.children}
          </section>
        )
    }
 
});

module.exports = MainLayout;