'use strict';

module.exports = {
  name: 'ember-cli-uuid',

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/node-uuid/uuid.js');
  }

};
