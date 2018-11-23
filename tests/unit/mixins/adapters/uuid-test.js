import EmberObject from '@ember/object';
import AdaptersUuidMixin from 'ember-cli-uuid/mixins/adapters/uuid';
import { module, test } from 'qunit';
import UUIDTestHelper from '../../../helpers/uuid';

module('Unit | Mixin | adapters/uuid', function() {
  test('using the adapter mixin generates a correct v4 uuid', function(assert) {
    let AdaptersUuidObject = EmberObject.extend(AdaptersUuidMixin);
    let subject = AdaptersUuidObject.create();

    const generatedUuidForRecord = subject.generateIdForRecord();

    assert.ok(UUIDTestHelper.isV4(generatedUuidForRecord));
  });
});
