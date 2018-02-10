import Ember from 'ember';
import { uuid } from 'ember-cli-uuid';

export function generateIdForRecord() {
  return uuid();
}

export default Ember.Mixin.create({ generateIdForRecord });
