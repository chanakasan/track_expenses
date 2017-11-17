import React from 'react';
import styled from 'styled-components';

const columns = [
  {
    id: 'date',
  },
  {
    id: 'description',
  },
  {
    id: 'amount',
  },
]

const Row = ({ item }) => _.map(columns, (column, index) => <div key={index}>{ item[column.id] }</div>)

const GridBase = styled.div`
  display: grid;
  grid-template-columns: 20% 40% 20%;
  grid-gap: 1em;
`

const Headings = GridBase.extend`
  margin-bottom: 10px;
  font-weight: 600;
`

const Body = GridBase.extend`
`


export default class Grid extends React.Component {
  render() {
    const { list } = this.props

    return (
      <div>
        <Headings>
          { _.map(columns, (column, index) => <div key={index}>{ column.id }</div>) }
        </Headings>

        <Body>
          { _.map(list, (item, index) => <Row key={index} item={item} />) }
        </Body>
      </div>
    )
  }
}
