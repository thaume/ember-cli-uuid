import { uuid } from 'ember-cli-uuid';
import uuidDirect from "ember-cli-uuid/utils/uuid-helpers";
import { module, test } from 'qunit';

module('Unit | Utility | uuid');

test('using the old way to require the uuid util generates a correct v4 uuid', function(assert) {
  const regexIsUUID = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

  assert.ok(regexIsUUID.test(uuidDirect()));
});


test('using the uuid util generates a correct v4 uuid', function(assert) {
  const regexIsUUID = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;

  assert.ok(regexIsUUID.test(uuid()));
});
