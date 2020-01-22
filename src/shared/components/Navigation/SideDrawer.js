import React from 'react'
import ReactDOM from 'react-dom'

import './SideDrawer.css'

// drawer-hook ID is located above the root ID in index.html. It's displayed as before, but rendered differently and semantically better. Portals allow to render content of component in a different place than the component itself. 
const SideDrawer = props => {
  const content = <aside className="side-drawer">{props.children}</aside>

  return ReactDOM.createPortal(content, document.getElementById('drawer-hook')) 
}

export default SideDrawer