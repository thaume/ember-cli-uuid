/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-uuid',

  included: function(app) {
    this._super.included(app);

    this.app.import('node_modules/node-uuid/uuid.js');
  }

};
