/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-dwolla-js',

  included(app) {
    this._super.included(app);
    this.app.import('vendor/dwolla.js', {
      type: 'vendor'
    });
  }
};
