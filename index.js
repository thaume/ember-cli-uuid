/* eslint-env node */
'use strict';

const merge = require('broccoli-merge-trees');
const path = require('path');
const Rollup = require('broccoli-rollup');

module.exports = {
  name: 'ember-cli-uuid',

  included: function(app) {
    this._super.included(app);

    app.import('vendor/uuid.amd.js');
  },

  treeForVendor(tree) {
    const uuidTree = new Rollup(path.dirname(require.resolve('uuid')), {
      rollup: {
        entry: './index.js',
        targets: [{
          dest: 'uuid.amd.js',
          format: 'amd',
        }]
      }
    });

    if (!tree) {
      return this._super.treeForVendor.call(this, uuidTree);
    }

    const trees = merge([ uuidTree, tree ], {
      overwrite: true
    });

    return this._super.treeForVendor.call(this, trees)
  }
};
