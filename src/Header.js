import React, { Component } from 'react';
import './style.css';
import './script.js';
import ToggleSwitch from './ToggleSwitch.js';

class HeaderMenus extends Component {
    render () {
        var {hs_tabname1, hs_tabname2, hs_tabname3, hs_tabname4, hs_tabname5} = this.props;
        return (
            <div className="container-header">
                <div className="row">
                <div className="col-md-9 col-xs-10 header-strip">
                    <ul>
                        <li className="tab-button">{hs_tabname1}</li>
                        <li className="tab-button">{hs_tabname2}</li>
                        <li className="tab-button">{hs_tabname3}</li>
                        <li className="tab-button">{hs_tabname4}</li>
                        <li className="tab-button active">{hs_tabname5}</li>
                    </ul>
                </div>
                <div className="col-md-3 col-xs-2">
                    <div id="header-strip-right-menu">
                    {/* React version comment:
                    I've removed the <a> tag as it would not accept an empty '#'.
                    This is actually an improvement on the original version and a neater solution
                    as the class now acts to style the text and requires less code in total and is potentially more flexible.
                    */}
                        Veris Veritatis <i className="fas fa-chevron-down" style={{color:'white', fontSize:70 + '%'}}></i>
                        <div id="login-img">Z</div>
                    </div>
                </div>
                </div>
                <div className="header-menu">
                <table>
                    <tr>
                        <td className="menu-s1">
                        Sunt
                        </td>
                        <td className="menu-s2">
                        <span className="fas fa-chevron-circle-down header-menu-icon"></span>
                        <br />Beatae Vita
                        </td>
                        <td className="menu-s3">
                        Doloremque laudantium otam Doloremque laudantium otam
                        </td>
                        <td className="menu-s4"></td>
                        <td className="menu-s5a" style={{borderRight:'none'}}>
                        <button onclick="clickArchieto()">
                            <span className="fas fa-trash header-menu-icon"></span>
                            <br />Archieto
                        </button>
                        </td>
                        <td className="menu-s5b" style={{borderLeft:'none',borderRight:'none'}}>
                            {/*<ToggleSwitch />  Attempted to add toggle switch as component.*/}
                        <span>
                            <label className="switch" style={{marginLeft:'10px'}}>
                            <input type="checkbox">
                                {/*<span className="slider round"> </span>*/}
                            </input>
                            </label>
                        </span>
                        <br />Aperiam
                        </td>
                        <td className="menu-s5c" style={{borderLeft:'none',borderRight:'none'}}>
                            {/*<ToggleSwitch isChecked={ false }/>  Attempted to add toggle switch as component and include state - still falls over when handling change.*/}
                            <span>
                                <label className="switch">
                                    <input type="checkbox" checked>
                                    {/* React version Comment:
                                    React requires input element to be void.
                                    To get the page up and running I have commented out the span.
                                    This means the toggle switches will be missing from the rendered page.
                                    I think that the toggle might ultimately be replaced with a react component toggle/state system.
                                    */}
                                    {/*<span className="slider round"> </span>*/}
                                    </input>
                                </label>
                            </span>
                            <br />Totam
                        </td>
                        <td className="menu-s5d" style={{borderLeft:'none',borderRight:'none'}}>
                        <button onclick="clickRem()">
                            <span className="fas fa-envelope header-menu-icon"></span>
                            <br />Rem
                        </button>
                        </td>
                        <td className="menu-s6"></td>
                    </tr>
                </table>
                </div>
            </div>
        );
    }
}

export default HeaderMenus;