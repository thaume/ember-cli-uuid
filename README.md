## Ember CLI UUID

[![npm version](https://badge.fury.io/js/ember-cli-uuid.svg)](https://badge.fury.io/js/ember-cli-uuid)
[![Build Status](https://travis-ci.org/thaume/ember-cli-uuid.svg?branch=master)](https://travis-ci.org/thaume/ember-cli-uuid)
[![Ember Observer Score](http://emberobserver.com/badges/ember-cli-uuid.svg)](http://emberobserver.com/addons/ember-cli-uuid)
[![Code Climate](https://codeclimate.com/github/thaume/ember-cli-uuid/badges/gpa.svg)](https://codeclimate.com/github/thaume/ember-cli-uuid)

Associated blog post : [Using uuids with ember data](http://thau.me/2015/01/using-uuids-with-ember-data) (warning: old ember version).

This addon adds a hook to your Ember Data Adapter (and all adapters extended from DS.Adapter) to generate the id of each record you create on the client-side.

The created ids are v4 UUIDs which are random "enough", quoting wikipedia:

> the annual risk of a given person being hit by a meteorite is estimated to be one chance in 17 billion, which means the probability is about 0.00000000006 (6 × 10−11), equivalent to the odds of creating a few tens of trillions of UUIDs in a year and having one duplicate. In other words, only after generating 1 billion UUIDs every second for the next 100 years, the probability of creating just one duplicate would be about 50%.

## Installation

```bash
ember install ember-cli-uuid
```

## Usage

This Ember CLI module is intended for use with Ember Data. Once you install it (and the blueprint is applied) your ember data models will get a new behaviour when being created on the client-side. When creating a model like that :

```javascript
store.createRecord('post', {
  title: 'My post'
});
```

Your model will get a v4 (random) UUID as his primary key :

```javascript
{
  id: 'b4301bcb-a687-4f91-86c8-8b9241f6e6bc',
  title: 'My post'
}
```

### Desactivate the "auto UUID" feature
You might need to turn off the auto generation of UUIDs on your Ember Data models. To achieve that, you will need to edit your `config/environment.js` file like this :

```javascript
const ENV = {
  // ... others config vars
  'ember-cli-uuid': {
    defaultUUID: false
  }
};
```

### Direct usage
You can also (if you need a UUID v4 somewhere in your app) use it like that :

```javascript
import {uuid} from 'ember-cli-uuid';

uuid(); // 6c84fb90-12c4-11e1-840d-7b25c5ee775a
```
