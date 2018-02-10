import Mixin from '@ember/object/mixin';
import { uuid } from 'ember-cli-uuid';

export function generateIdForRecord() {
  return uuid();
}

export default Mixin.create({ generateIdForRecord });
