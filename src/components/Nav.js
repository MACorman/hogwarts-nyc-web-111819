import piggy from '../porco.png'
import React from 'react'

class Nav extends React.Component {

	selectHandler = (e) => {
		let v = e.target.value
		this.props.sortSelect(v)
	}

	render() {
		return (
			<div className="navWrapper">
				<span className="headerText">Hogwarts</span>
				<div className="TwirlyPig">
					<img src={piggy} className="App-logo" alt="piggy" />
				</div>
				<span className="normalText">A React App for County Fair Hog Fans</span>
				<br/>
				<br/>
				<button style={{width: '150px'}} onClick={this.props.filterToggle} >{this.props.showAll ? "Show Greased Only" : "Show All" }</button>
				<select style={{width: '150px'}} onChange={this.selectHandler} >
					<option value="default">Default</option>
					<option value="name">By Name</option>
					<option value="weight">By Weight</option>
				</select>
			</div>
		)
	}
}

export default Nav
