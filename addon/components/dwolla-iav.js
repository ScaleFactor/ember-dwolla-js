import Ember from 'ember';
import layout from '../templates/components/dwolla-iav';

export default Ember.Component.extend({
  layout,

  dwolla: Ember.inject.service("dwolla"),

  // Html id of the element to render the iav flow into
  for: 'dwolla-iav-container',

  // A single use IAV token generated on the server
  token: null,

  // Starts the dwolla iav flow when token is defined
  tokenObserver: Ember.observer('token', function() {
    let token = this.get('token');
    if(token) {
      let self = this;
      this.get('dwolla')
          .startIAV(token, {
            container: this.get('for')
          })
          .then(self.get('onSuccess'))
          .catch(self.get('onFailure'));
    }
  })
});
