import React, { Component } from 'react';
import './style.css';
import './script.js';

class TabContent extends Component {
    render () {
        var {title, subtitle} = this.props;
        return (
            <div className="container-content">
            {/* Perspiciatis Unde page content
            REACT version comment:
            Experimenting with reducing the main 'app' component by moving the major sections into separate components.
            As I thought this would make a neater/easier to manage initial app file.
            This should allow the components to be reused individually if this were part of a larger app.
            
            I've piped in some of the information for the page via props.
            The idea being that this would serve as a template but different content could be passed in
            for different menu selections.

            I've used two types of prop calls to see both working but I suspect there may ba a preferred
            convention?
            */}
            <div className="tab-content" id="PerspiciatisUnde">
              <h2><span className="fa fa-check" style={{fontSize:'90%'}}></span> {this.props.title}</h2>
              <h4>{subtitle}</h4>
              <div className="content-list-block">
                <div className="content-list-type-1">
                  <ul>
                    <li>Otam rem aperiam</li>
                    <li>Ipsa quae</li>
                    <li>Unde omnis</li>
                    <li>Voluptatem (duvrnem)</li>
                  </ul>
                  <ul>
                    <li>Totam</li>
                    <li>Iste Natus</li>
                    <li>Omnis Iste Natus Erro</li>
                    <li>Explicabo</li>
                  </ul>
                </div>
                <div className="content-list-type-2">
                  <ul className="list-unstyled">
                    <li>Perspiciatis Unde</li>
                    <li>Architecto beatae vitae</li>
                    <li>Perspiciatis Unde</li>
                    <li>Architecto beatae vitae</li>
                  </ul>
                  <ul className="list-unstyled">
                    <li>5.0</li>
                    <li>Omnis iste natus</li>
                    <li>Accusantium doloremque laudant</li>
                    <li>Accusantium dolor</li>
                  </ul>
                </div>
                <div className="content-list-type-3">
                  <ul className="list-unstyled">
                    <li><br /></li>
                    <li><br /></li>
                    <li><br /></li>
                    <li>architecto beatae vitae</li>
                  </ul>
                  <ul className="list-unstyled">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="tab-content-panel">
                <div className="tab-content-panel-header">
                  <p id="tab-header-item1">Perspiciatis Unde</p>
                  <p id="tab-header-item2">Accusantium doloremque laudant</p>
                  <p id="tab-header-item3">Voluptatem (duvrnem)</p>
                </div>
                <div className="tab-content-panel-separator">
                  <hr />
                </div>
                <div className="tab-content-panel-main">
                  <p className="panel-main-item1">Iste Natus</p>
                    <p>
                      <div className="panel-dropdown-menu">
                        <select>
                          <option value="0">
                            Accusantium doloremque laudant
                          </option>
                          <option value="1">Architecto beatae vitae</option>
                          <option value="2">Architecto beatae vitae</option>
                          <option value="3">Architecto beatae vitae</option>
                          <option value="4">Architecto beatae vitae</option>
                          <option value="5">Architecto beatae vitae</option>
                          <option value="6">Architecto beatae vitae</option>
                          <option value="7">Architecto beatae vitae</option>
                        </select>
                      </div>
                    </p>
                  <p className="panel-main-item3">Unde Omnis</p>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default TabContent;