import React from "react";
import styled from 'styled-components';
import Grid from './Grid';

const data = [
  {
    date: '2017-11-12',
    description: 'bananas',
    amount: '120',
  },
  {
    date: '2017-11-02',
    description: 'taxi, home to thalahena',
    amount: '300',
  },
]

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      list: data,
    }
  }

  render() {
    return (
      <div className="my-app">
        <h1>Track Expenses</h1>
        <hr />

        <Grid
          list={this.state.list}
        />
      </div>
    )
  }
}
