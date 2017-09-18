import Ember from 'ember';
import layout from '../templates/components/dwolla-iav';

export default Ember.Component.extend({
  layout,

  dwolla: Ember.inject.service("dwolla"),

  // html id of the element to render the iav flow into
  for: 'dwolla-iav-container',

  // A single use IAV token generated on the server
  token: null,

  // Observe the token property to start the dwolla flow
  // when the token is set
  tokenObserver: Ember.observer('token', function() {
    if(this.get('token')) {
      this.get('dwolla').startIAV(this.get('token'), {
        container: this.get('for')
      }).then((result) => {
        console.log('Got result');
        console.log(result);
      }).catch((e) => {
        console.log('Caught error');
        console.log(e);
      });
    }
  })
});
