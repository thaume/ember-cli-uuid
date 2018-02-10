import DS from 'ember-data';
import ENV from '../config/environment';
import { generateIdForRecord } from 'ember-cli-uuid/mixins/adapters/uuid';
import Configuration from 'ember-cli-uuid/configuration';

export default {

  name: 'ember-cli-uuid',

  initialize() {

    const config = ENV['ember-cli-uuid'] || {};
    Configuration.load(config);

    DS.Adapter.reopen({

      generateIdForRecord() {
        return Configuration.defaultUUID ? generateIdForRecord(...arguments) : null;
      }

    });
  }

};
