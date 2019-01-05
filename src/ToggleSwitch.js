import React, { Component } from 'react';
import './ToggleSwitchStyle.css';

class ToggleSwitch extends Component {
    
    constructor ( props ) {
        super( props );

        this.state = {
            isChecked: null
        }
    }

    componentWillMount () {
		this.setState( { isChecked: this.props.isChecked } );
    }
    
    render () {
        return (<div className="switch-container">
        <label>
            <input ref="switch" checked={ this.state.isChecked } onChange={ this._handleChange } className="switch" type="checkbox" />
            <div>
      
                <div></div>
            </div>
        </label>
    </div>);
    }

    /* I think the function below is the root cause for the toggle switch to fail when it is pressed.
    Feels like I am missing something -> I am expecting to passing in the state (checked true/false)- could this be the cause of the fail on switch? */

    _handleChange () {
		this.setState( { isChecked: !this.state.isChecked } );
    }
}

export default ToggleSwitch;