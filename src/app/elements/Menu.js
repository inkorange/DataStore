import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link } from 'react-router'

// models
import Store    from '../models/Store';

const Menu = React.createClass({
    contextTypes: {
        location: React.PropTypes.object
    },

    getInitialState: function() {
        return {
            selected : Store.getStore('menuvalues') // would extend with anything in the LocalStore
        }
    },

    getDefaultProps: function () {
        return {

        };
    },

    _updateData: function(data) {
    },

    setDashboardState: function(data) {
        if (this.isMounted()) {
            console.log('success load.', data, this.state);
            this.setState({data: data});
        }
    },

    changeValue: function(e) {
        var selectvalue = $(e.currentTarget).attr('value');
        this.setState({ selected: selectvalue});
        Store.setStore('menuvalues', selectvalue, {persist: true});
    },

    loadDrawer: function(data) {
        console.log('Did my value persist in the store? : ', Store.getStore('dashboardfilter'));
        this.refs.trailerDrawer.loadDrawer(data);
    },

    render() {
        console.log('picked: ', this.state.selected);
        return (
            <nav>
                <h3>An example where the DataStore will persist through LocalStorage</h3>
                <ul>
                    <li><input type="radio" name="pickone" onClick={this.changeValue} checked={(this.state.selected === 'option1') && 'checked' } value="option1" />Option 1</li>
                    <li><input type="radio" name="pickone" onClick={this.changeValue} checked={(this.state.selected === 'option2') &&  'checked' } value="option2" />Option 2</li>
                    <li><input type="radio" name="pickone" onClick={this.changeValue} checked={(this.state.selected === 'option3') &&  'checked' } value="option3" />Option 3</li>
                    <li><input type="radio" name="pickone" onClick={this.changeValue} checked={(this.state.selected === 'option4') &&  'checked'} value="option4" />Option 4</li>
                    <li><input type="radio" name="pickone" onClick={this.changeValue} checked={(this.state.selected === 'option5') && 'checked' } value="option5" />Option 5</li>
                </ul>
                <p>Go ahead, make a selection and refresh.</p>
            </nav>
        )
    }

});

module.exports = Menu;