import React, { Component } from "react";
import { Helmet } from "react-helmet";

import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { fixed } = this.state;
    const { OnVisualizeClicked, OnResetGridClicked } = this.props;
    return (
      <div className="header">
        <Helmet>
          <title>Pathfinding Visualizer</title>
        </Helmet>
        <h1>Pathfinding Visualizer</h1>
        <p>
          <select
            className="algorithm-select"
            //onChange={onAlgoChange}
            id="algorithm"
          >
            <option value="DIJKSTRA" defaultChecked>
              Dijkstra
            </option>
            <option value="BELLMAN_FORD">Bellman-Ford</option>
            <option value="BFS">BFS</option>
            <option value="DFS">DFS</option>
            <option value="A_STAR">A*</option>
          </select>

          <button onClick={() => OnVisualizeClicked()}>Visualize</button>
          <button onClick={() => OnResetGridClicked()}>Reset Board</button>
        </p>
      </div>
    );
  }
}

export default Header;
