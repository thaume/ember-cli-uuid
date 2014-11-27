'use strict';

var path = require('path');

module.exports = {
  name: 'Ember CLI UUID',

  treeFor: function(name) {
    if (name !== 'vendor') { return; }

    return this.treeGenerator(path.join(__dirname, 'node_modules/node-uuid'));
  },

  included: function(app) {
    this._super.included(app);

    this.app.import('vendor/uuid.js', {
      exports: {
        'uuid': ['default']
      }
    });
  }

};
