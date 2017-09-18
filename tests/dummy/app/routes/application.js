import Ember from 'ember';

export default Ember.Route.extend({
  dwolla: Ember.inject.service("dwolla")
});