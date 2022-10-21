import React, { Component } from "react";

class Item extends Component {
  state = {
    listitems: ["Gym 1", "Gym 2", "Gym 3", "Racquetball/Squash Courts", "Indoor Pool", "Outdoor Pool", "S & C (Main)", "S & C (Upstairs)", "S & C (Downstairs)", "Track"]
  };

  render() {
    return (
      <React.Fragment>
        <ul className="list-group">
          {this.state.listitems.map(listitem => (
            <li
              key={listitem}
              className="list-group-item list-group-item-primary"
            >
              {listitem}
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Item;