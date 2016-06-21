import React from 'react';
import Relay from 'react-relay';
import Link  from '../js/components/link.js';

class Main extends React.Component {
  render() {
    //TODO make the LI to a <Link /> component
    let content = this.props.store.linkConnection.edges.map(edge => {
      return <Link key={edge.node.id} link={edge.node} />
    })
    return (
      <div>
        <h3>Links</h3>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
}

Main = Relay.createContainer(Main, {
  fragments: {
    store: () => Relay.QL`
    fragment on Store {
      linkConnection(first: 5) {
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
