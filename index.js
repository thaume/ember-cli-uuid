/* eslint-env node */
'use strict';

const path = require('path');
const Webpack = require('broccoli-webpack');

module.exports = {
  name: require('./package').name,

  options: {
    nodeAssets: {
      uuid: {
        vendor: {
          processTree() {
            const uuidPath = path.dirname(require.resolve('uuid'));
            return new Webpack([uuidPath], {
              entry: './index.js',
              output: {
                library: 'uuid',
                libraryTarget: 'amd',
                filename: 'uuid.amd.js'
              }
            });
          }
        }
      }
    }
  },

  included() {
    this.import('vendor/uuid.amd.js');
  }
};
