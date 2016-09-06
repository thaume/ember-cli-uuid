import Ember from 'ember';

const { getWithDefault, typeOf } = Ember;

const DEFAULTS = {
  defaultUUID: true
};

/**
  Ember CLI UUID's configuration object (borrowed from Ember Simple Auth).

  To change any of these values, set them on the application's environment
  object, e.g.:

  ```js
  // config/environment.js
  ENV['ember-cli-uuid'] = {
    defaultUUID: false
  };
  ```

  @class Configuration
  @extends Object
  @module ember-cli-uuid/configuration
  @public
*/
export default {
  /**
    If `defaultUUID` is set to `true`, all Ember-Data generated records will
    have an automated UUID v4 set as their primary key.

    @property defaultUUID
    @readOnly
    @static
    @type Boolean
    @default false
    @public
  */
  defaultUUID: DEFAULTS.defaultUUID,

  load(config) {
    for (let property in this) {
      if (this.hasOwnProperty(property) && typeOf(this[property]) !== 'function') {
        this[property] = getWithDefault(config, property, DEFAULTS[property]);
      }
    }
  }
};
