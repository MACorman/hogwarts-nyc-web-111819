import React from 'react'

class Hog extends React.Component {

    state = {
        showDeets: false,
        showMe: true
    }

    clickHamdler = () => {
        this.setState({ showDeets: !this.state.showDeets })
    }
    
    hideHandler = () => {
        this.setState({ showMe: false })

    }

    render() {
        return (
            <div onClick={this.clickHamdler} className="pigTile">
            <h3>{this.props.name}</h3>
            {/* <img onClick={this.clickHamdler} alt={this.props.name} src={this.props.image} /> */}
            {!this.state.showDeets ? <img className="" alt={this.props.name} src={this.props.image} /> : 
                <div>
                    <div>Specialty: {this.props.specialty}</div>
                    <div>{this.props.greased ? "Greased" : "Not Greased" }</div>
                    <div>Weight: {this.props.weight}</div>
                    <div className="achievementText" >Highest Medal: {this.props.medal}</div>
                    <hr/>
                </div>
            }
        <button onClick={this.hideHandler} style={{width: '150px'}}>Hide Me!</button>
        </div>
        )
    }

}

export default Hog