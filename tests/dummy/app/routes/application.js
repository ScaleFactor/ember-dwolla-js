import Ember from 'ember';

export default Ember.Route.extend({
  dwolla: Ember.inject.service("dwolla"),

  setupController(controller, route) {
    this._super(...arguments);
    controller.set('dwollaTestToken', 'abc123');
    
    // this.get('dwolla').createFundingSource('fake-token', {}).then((response) => {
    //   console.log("Created bank account");
    //   console.log(response);
    // }).catch((e) => {
    //   console.log("Caught an error");
    //   console.log(e);
    // });
  }
});