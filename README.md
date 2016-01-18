## Ember CLI UUID

This addon adds a hook to your Ember Data Adapter (and all adapters extended from DS.Adapter) to generate the id of each record you create on the client-side.

This is an npm package that contains the Ember CLI uuid generator for Ember-Data
library, packaged as an [Ember CLI](https://github.com/stefanpenner/ember-cli)
Addon.

## Installation

Ember CLI >= 0.2.3, run

```
ember install ember-cli-uuid
```

in your Ember CLI project's root.

**If you run with Ember CLI >= 0.1.5 && < 0.2.3**

```
ember install:addon ember-cli-uuid
```

**If you run with Ember CLI >= 0.0.44 && < 0.1.5**

```
npm install --save-dev ember-cli-uuid
ember generate ember-cli-uuid
```

## Usage

This Ember CLI module is intended for use with Ember Data. Once you install it (and the blueprint is applied) your ember data models will get a new behaviour when being created on the client-side. When creating a model like that :

```
store.createRecord('post', {
  title: 'My post'
});
```

Your model will get a v4 (random) UUID as his primary key

### Direct usage
You can also (if you need a UUID somewhere in your app) use it like that :

```
import uuid from "ember-cli-uuid/utils/uuid-generator";

uuid(); // -> '6c84fb90-12c4-11e1-840d-7b25c5ee775a'
```
