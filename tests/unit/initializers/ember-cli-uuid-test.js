import Ember from 'ember';
import DS from 'ember-data';
import EmberCliUuidInitializer from '../../../initializers/ember-cli-uuid';
import { module, test } from 'qunit';

let application;

const regexIsUUID = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

module('Unit | Initializer | ember cli uuid', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

test('The DS.Adapter.generateIdForRecord now returns proper UUIDs v4', function(assert) {

  EmberCliUuidInitializer.initialize(application);

  const adapter = new DS.Adapter();
  const generatedUuidForRecord = adapter.generateIdForRecord();

  assert.ok(regexIsUUID.test(generatedUuidForRecord));
});
