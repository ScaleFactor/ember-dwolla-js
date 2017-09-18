/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-dwolla-js',

  included(app) {
    this._super.included(app);
    this.app.import('vendor/dwolla.js', {
      type: 'vendor'
    });
  },

  contentFor(type, config) {
    if(type === 'body-footer') {
      let dwollaConfig = config['ember-dwolla-js'] || {};
      let env = dwollaConfig['env'] || 'prod';
      return `<script>window.dwolla.configure('${env}');</script>`;
    }
  }
};
