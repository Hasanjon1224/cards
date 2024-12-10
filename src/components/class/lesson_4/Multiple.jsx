import React, { Component } from "react";

export default class Multiple extends Component {
  state = {
    users: [1, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  };
  render() {
    return (
      <ul>
        {this.state.users.map((user) => {
          return (
            <li>
              it is out {user}
              <p>role is {user % 2 === 0 ? "Admin" : "user"}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}
