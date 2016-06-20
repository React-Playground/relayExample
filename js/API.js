import { post } from 'jquery';
import ServerActions from '../actions/serverActions.js';

const API = {
  fetchLinks() {
    post("/graphql", {
      query: `{
        links {
          _id
          title
          url
        }
      }`
    })
    .then(resp => {
      ServerActions.receiveLinks(resp.data.links);
    });
  }
}

export default API
