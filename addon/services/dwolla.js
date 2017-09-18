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
  addBankAccount(token, params) {
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
  }
});