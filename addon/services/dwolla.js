import Ember from 'ember';

export default Ember.Service.extend({
  dwolla: window.dwolla,

 /**
  * Returns an Ember promise with the result of adding a bank account.
  *
  * @token: A funding sources token generated on your server
  * @params: An object containing params to create a funding source. Contains keys: routingNumber, accountNumber, type, and name.
  *   routingNumber represents a string value nine digit routing number.
  *   accountNumber represents a string value account number.
  *   type represents a string value of either checking or savings.
  *   name represents a string value identifying name of the user’s bank.
  */
  createFundingSource(token, params) {
    let self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      self.get('dwolla').fundingSources.create(token, params, callback);

      function callback(err, res) {
        if(err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    });
  },

 /**
  * Starts the Dwolla IAV flow and returns an Ember promise for the result.
  * 
  * @token: A single use IAV token generated on your server
  * @params: An object containing configurable options. Contains keys: container, stylesheets, microDeposits, fallbackToMicroDeposits, backButton, and subscriber
  *   container represents a string value container element where IAV will render
  *   stylesheets represents an array list of stylesheets to load IAV styles
  *   microDeposits represents a boolean true or false value which determines if the micro-deposit method of bank verification is presented as an option throughout the IAV flow
  *   fallbackToMicroDeposits represents a boolean true or false value which determines if a fallback selection screen appears for choosing an alternative bank verification method
  *   backButton represents a boolean true or false value which determines if a back button is displayed throughout the IAV flow
  *   subscriber is a function that can be used to subscribe to state changes throughout the IAV flow. This function will be called with an object containing a currentPage and an optional error attribute
  */
  startIAV(token, params) {
    let self = this;
    return new Ember.RSVP.Promise(function(resolve, reject) {
      self.get('dwolla').iav.start(token, params, callback);

      function callback(err, res) {
        if(err) {
          reject(err);
        } else {
          resolve(res);
        }
      }
    });
  }
});