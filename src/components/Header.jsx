import PropTypes from 'prop-types'
import React from 'react'

//  we can use ( props ) 
// but we can use destructuring with curly braces { text }
const Header = ({ text }) => {
	
	const person = {
		name: 'John',
	}
	person.age = 25;
	console.log(person);

	return (
		<header> 
			<div className='container'>
				<h2>
					{text} { /* we can use like this */ }
					{/* and camment this { props.text} */}
				</h2>
			</div>
		</header>	
	)
}

Header.defaultProps = {
	text: 'Feedback UI',
}
// checking the type of the props like this
Header.prototype = {
	text: PropTypes.string
	// text: PropTypes.string.isRequired
	// this is the same as the line above but with isRequired property, which mean that the prop is required
}

export default Header
