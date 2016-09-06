import Ember from 'ember';
import { module, test } from 'qunit';
import Configuration from 'ember-cli-uuid/configuration';

let application;

module('Unit | Configuration', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  },
  afterEach() {
    Configuration.load({});
  }
});

test('Configuration defaultUUID defaults to `true`', function(assert) {
  Configuration.load({});
  assert.equal(Configuration.defaultUUID, true);
});

test('Configuration .load sets defaultUUID properly', function(assert) {
  Configuration.load({ defaultUUID: false });
  assert.equal(Configuration.defaultUUID, false);
});
