import DS from 'ember-data';
import uuid from 'uuid';

export default {

  name: 'authentication-setup',
  before: 'simple-auth',

  initialize: function () {

    DS.RESTAdapter.reopen({

      generateIdForRecord: function () {
        return uuid.v4();
      }

    });
  }

};
