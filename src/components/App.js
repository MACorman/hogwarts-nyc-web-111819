import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import augustus_gloop from '../hog-imgs/augustus_gloop.jpg'
import bay_of_pigs from '../hog-imgs/bay_of_pigs.jpg'
import cherub from '../hog-imgs/cherub.jpg'
import galaxy_note from '../hog-imgs/galaxy_note.jpg'
import leggo_my_eggo from '../hog-imgs/leggo_my_eggo.jpg'
import mudblood from '../hog-imgs/mudblood.jpg'
import piggy_smalls from '../hog-imgs/piggy_smalls.jpg'
import porkchop from '../hog-imgs/porkchop.jpg'
import rainbowdash from '../hog-imgs/rainbowdash.jpg'
import sobriety from '../hog-imgs/sobriety.jpg'
import the_prosciutto_concern from '../hog-imgs/the_prosciutto_concern.jpg'
import trouble from '../hog-imgs/trouble.jpg'
import truffleshuffle from '../hog-imgs/truffleshuffle.jpg'
import Hog from './Hog'

const imageLookup = {
  "Augustus Gloop": augustus_gloop,
  "Bay of Pigs": bay_of_pigs,
  "Cherub": cherub, 
  "Galaxy Note": galaxy_note, 
  "Leggo My Eggo": leggo_my_eggo, 
  "Mudblood": mudblood, 
  "Piggy smalls": piggy_smalls, 
  "Porkchop": porkchop, 
  "Rainbowdash": rainbowdash, 
  "Sobriety": sobriety, 
  "The Prosciutto Concern": the_prosciutto_concern, 
  "Trouble": trouble, 
  "TruffleShuffle": truffleshuffle
}

class App extends Component {

  state = {
    // hogs,
    showAll: true,
    sort: "default"
  }

  hogImageName = (name) => {
    return './src/hog-imgs/' + name.toLowerCase().replace(/\s/g, '_') + ".jpg"
  }

  hogImageName = (name) => {
    return name.toLowerCase().replace(/\s/g, '_')
  }

  filterToggle = () => {
    console.log("filterToggle")
    this.setState({ showAll: !this.state.showAll})
  }
  
  sortSelect = (v) => {
    console.log("sortSelect", v)
    this.setState({ sort: v })
  }

  // from https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
  compareValues = (key, order = 'asc') => {
    return function innerSort(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        // property doesn't exist on either object
        return 0;
      }
  
      const varA = (typeof a[key] === 'string')
        ? a[key].toUpperCase() : a[key];
      const varB = (typeof b[key] === 'string')
        ? b[key].toUpperCase() : b[key];
  
      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return (
        (order === 'desc') ? (comparison * -1) : comparison
      );
    };
  }

  render() {
    
    let sortedHogs = [...hogs]
    
    if (this.state.sort === 'name') {
      sortedHogs.sort(this.compareValues('name'))
    } else if (this.state.sort === 'weight') {
      sortedHogs.sort(this.compareValues('weight'))
    } 
    
    let displayedHogs = [...sortedHogs]
    if (this.state.showAll === false) {
      displayedHogs = displayedHogs.filter(hog => (hog.greased === true))
    }

    let counter = 0

    return (
      <div className="App">
          < Nav
            filterToggle={this.filterToggle}
            showAll={this.state.showAll} 
            sortSelect={this.sortSelect}           
          />
          {displayedHogs.map(hog => {
            counter++
            return <Hog 
              key={counter}
              name={hog.name}
              specialty={hog.specialty}
              weight={hog.weight}
              greased={hog.greased}
              image={imageLookup[hog.name]}
              medal={hog["highest medal achieved"]}
            />
          }
        )}
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ZGiZE0BzrUw?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/H-kL8A4RNQ8?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    )
  }
}

export default App;
