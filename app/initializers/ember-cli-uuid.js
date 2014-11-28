import DS from 'ember-data';
import uuid from 'uuid';

export default {

  name: 'ember-cli-uuid',

  initialize: function () {

    console.log('adapter: ', DS);
    DS.adapter.reopen({

      generateIdForRecord: function () {
        console.log('GENERATE');
        return uuid.v4();
      }

    });
  }

};
