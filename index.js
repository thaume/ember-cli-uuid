/* eslint-env node */
'use strict';

const merge = require('broccoli-merge-trees');
const path = require('path');
const Webpack = require('broccoli-webpack');

module.exports = {
  name: 'ember-cli-uuid',

  included(app, parentAddon) {
    // Quick fix for add-on nesting
    // https://github.com/aexmachina/ember-cli-sass/blob/v5.3.0/index.js#L73-L75
    // see: https://github.com/ember-cli/ember-cli/issues/3718
    while (typeof app.import !== 'function' && (app.app || app.parent)) {
      app = app.app || app.parent;
    }

    // if app.import and parentAddon are blank, we're probably being consumed by an in-repo-addon
    // or engine, for which the "bust through" technique above does not work.
    if (typeof app.import !== 'function' && !parentAddon) {
      if (app.registry && app.registry.app) {
        app = app.registry.app;
      }
    }

    if (!parentAddon && typeof app.import !== 'function') {
      throw new Error('ember-font-awesome is being used within another addon or engine and is' +
        ' having trouble registering itself to the parent application.');
    }

    app.import('vendor/uuid.amd.js');
  },

  treeForVendor(tree) {
    const uuidPath = path.dirname(require.resolve('uuid'));
    const uuidTree = new Webpack([ uuidPath ], {
      entry: './index.js',
      output: {
        library: 'uuid',
        libraryTarget: 'amd',
        filename: 'uuid.amd.js'
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
