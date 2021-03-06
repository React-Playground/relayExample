import React from 'react';
import Relay from 'react-relay';
import Link  from '../js/components/link.js';

class Main extends React.Component {
  setLimit = (e) => {
    let newLimit = Number(e.target.value);
    this.props.relay.setVariables({limit: newLimit});
  }
  render() {
    //TODO make the LI to a <Link /> component
    let content = this.props.store.linkConnection.edges.map(edge => {
      return <Link key={edge.node.id} link={edge.node} />
    })
    return (
      <div>
        <h3>Links</h3>
        <select onChange={this.setLimit}>
          <option value="1" defaultValue={1}>1</option>
          <option value="3">3</option>
          <option value="5">5</option>
        </select>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
}

Main = Relay.createContainer(Main, {
  initialVariables: {
    limit: 1
  },

  fragments: {
    store: () => Relay.QL`
    fragment on Store {
      linkConnection(first: $limit) {
        edges {
          node {
            id,
            ${Link.getFragment('link')}
          }
        }
      }
    }
    `
  }
})

export default Main;
