import { uuid } from 'ember-cli-uuid';
import uuidDirect from "ember-cli-uuid/utils/uuid-helpers";
import { module, test } from 'qunit';
import UUIDTestHelper from '../../helpers/uuid';

module('Unit | Utility | uuid');

test('using the old way to require the uuid util generates a correct v4 uuid', function(assert) {
  assert.ok(UUIDTestHelper.isV4(uuidDirect()));
});


test('using the uuid util generates a correct v4 uuid', function(assert) {
  assert.ok(UUIDTestHelper.isV4(uuid()));
});
