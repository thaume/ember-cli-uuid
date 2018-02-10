import Route from '@ember/routing/route';

export default Route.extend({

  model: function () {
    return this.store.createRecord('post', {
      title: 'Default title'
    });
  }

});
