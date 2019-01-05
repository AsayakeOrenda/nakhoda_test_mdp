import React, { Component } from 'react';
import './style.css';
import './script.js';
import TabContent from './TabContentLayout.js';
import HeaderMenus from './Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid container-main">
          {/* Header Menus */}
          <HeaderMenus
          hs_tabname1="Iste Natus"
          hs_tabname2="Explicabo"
          hs_tabname3="Omnis"
          hs_tabname4="Ipsa quae"
          hs_tabname5="Perspiciatis Unde"/>
          {/* Content */}
          <TabContent
          title="CSed ut perspiciatis unde"
          subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                  dicta sunt explicabo."/>
        </div>
      </div>
    );
  }
}

export default App;
