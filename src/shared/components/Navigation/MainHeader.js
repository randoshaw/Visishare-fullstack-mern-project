import React from 'react'

import './MainHeader.css'

// props.children refers to things passed between opening and closing tags of component - a placeholder for the content entered between the opening and closing tag of component -- MainHeader tag wrapped around MainNavigation elements.
const MainHeader = props => {
	return <header className="main-header">
        {props.children} 
    </header>
}

export default MainHeader
