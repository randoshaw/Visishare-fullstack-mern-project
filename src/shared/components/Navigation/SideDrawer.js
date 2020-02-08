import React from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

import './SideDrawer.css'

// drawer-hook ID is located above the root ID in index.html. It's displayed as before, but rendered differently and semantically better. Portals allow to render content of component in a different place than the component itself.
const SideDrawer = props => {
	const content = (
		<CSSTransition
			in={props.show}
			timout={200}
			classNames="slide-in-left"
			mountOnEnter
			unmountOnExit
		>
			<aside className="side-drawer" onClick={props.onClick}>
				{props.children}
			</aside>
		</CSSTransition>
	)

	return ReactDOM.createPortal(content, document.getElementById('drawer-hook'))
}

export default SideDrawer
