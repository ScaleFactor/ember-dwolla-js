import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    dwollaIAVFailure(err) {
      console.log("Caught dwollaIAVFailure");
      console.log(err);
    }
  }
});