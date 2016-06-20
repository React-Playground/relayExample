import React from 'react';
import Relay from 'react-relay';
import Link  from '../js/components/link.js';

class Main extends React.Component {
  render() {
    //TODO make the LI to a <Link /> component
    let content = this.props.store.links.map(link => {
      return <Link key={link._id} link={link} />
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
      links {
        _id
        ${Link.getFragment('link')}
      }
    }
    `
  }
})

export default Main;
