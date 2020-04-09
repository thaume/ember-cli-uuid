import Application from '@ember/application';
import { run } from '@ember/runloop';
import EmberCliUuidInitializer from '../../../initializers/ember-cli-uuid';
import { module, test } from 'qunit';
import Configuration from 'ember-cli-uuid/configuration';
import UUIDTestHelper from '../../helpers/uuid';
import Adapter from '@ember-data/adapter';

let application;

module('Unit | Initializer | ember cli uuid', function(hooks) {
  hooks.beforeEach(function() {
    run(function() {
      application = Application.create();
      application.deferReadiness();
    });
  });

  test('The Adapter.generateIdForRecord now returns proper UUIDs v4', function(assert) {

    EmberCliUuidInitializer.initialize(application);

    const adapter = Adapter.create();
    const generatedUuidForRecord = adapter.generateIdForRecord();

    assert.ok(UUIDTestHelper.isV4(generatedUuidForRecord));
  });


  test(`The Adapter.generateIdForRecord does not set a UUID v4 if ENV['ember-cli-uuid'] is set to false.`, function(assert) {

    EmberCliUuidInitializer.initialize(application);

    Configuration.load({ defaultUUID: false });

    const adapter = Adapter.create();
    const generatedUuidForRecord = adapter.generateIdForRecord();

    assert.notOk(UUIDTestHelper.isV4(generatedUuidForRecord));
  });
});
