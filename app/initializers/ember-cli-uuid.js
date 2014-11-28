import Ember from 'ember';
import uuid from 'ember-cli-uuid/utils/uuid-helpers';

export default {

  name: 'ember-cli-uuid',

  initialize: function () {

    console.log('uuid: ', uuid);
    DS.RESTAdapter.reopen({

      generateIdForRecord: function () {
        return uuid();
      }

    });
  }

};
