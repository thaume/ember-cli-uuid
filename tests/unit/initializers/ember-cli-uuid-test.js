import Application from '@ember/application';
import { run } from '@ember/runloop';
import DS from 'ember-data';
import EmberCliUuidInitializer from '../../../initializers/ember-cli-uuid';
import { module, test } from 'qunit';
import Configuration from 'ember-cli-uuid/configuration';
import UUIDTestHelper from '../../helpers/uuid';

let application;

module('Unit | Initializer | ember cli uuid', {
  beforeEach() {
    run(function() {
      application = Application.create();
      application.deferReadiness();
    });
  }
});

test('The DS.Adapter.generateIdForRecord now returns proper UUIDs v4', function(assert) {

  EmberCliUuidInitializer.initialize(application);

  const adapter = new DS.Adapter();
  const generatedUuidForRecord = adapter.generateIdForRecord();

  assert.ok(UUIDTestHelper.isV4(generatedUuidForRecord));
});


test(`The DS.Adapter.generateIdForRecord does not set a UUID v4 if ENV['ember-cli-uuid'] is set to false.`, function(assert) {

  EmberCliUuidInitializer.initialize(application);

  Configuration.load({ defaultUUID: false });

  const adapter = new DS.Adapter();
  const generatedUuidForRecord = adapter.generateIdForRecord();

  assert.notOk(UUIDTestHelper.isV4(generatedUuidForRecord));
});
