import DS from 'ember-data';

export default {

  name: 'test-uuid',

  initialize: function () {

    console.log('DS: ', DS.RESTAdapter);

  }
};
