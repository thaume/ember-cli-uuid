import Ember from 'ember';
import DS from 'ember-data';
import { uuid } from 'ember-cli-uuid';

export default {

  name: 'ember-cli-uuid',

  initialize: function () {

    DS.Adapter.reopen({

      generateIdForRecord: function () {
        return uuid();
      }

    });
  }

};
