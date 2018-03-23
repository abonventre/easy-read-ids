# Easy Read Ids
Easy to read and write IDs for javascript applications.

Generates `mostly` unique IDs that should be easy to read and write.  ID's are
generated using a simple makeup of any of the following *or all of them!*

* Actions
* Animals
* Colors
* Adjectives
* Numbers
* Nautical Words

*That last one is a strange one, I know... I work for a ferry company :-)*

The package was created to add some id space to our capabilities as well as some configuration.
We also use these id's for customer facing interaction, so we wanted to remove some of the more
unsavory adjective/animal combos some people were complaining about.  People will complain about
anything and everything.

## Installation

```sh
$ npm install easy-read-ids
```

## Usage

For a simple `adjective`-`animal`-`number(0-100)` just try:

```javascript
const erid = require('easy-read-id');

erid.generate();
// harmless-dingo-2
```

For more customization check out the api!

## API

### erid.generate([*elements*], *maxNumber*, *separator*)

*elements*: `array` of elements you want to be in the generated id (options include `action`, `animal`, `color`, `nautical`, `adjective`, `number`) Default is `['adjective', 'animal', 'number']`

*maxNumber*: `integer` of the maximum number to use for the random number if included in the elements array. i.e. `500` would be generate a number from `0-500` instead of the default `0-100`

*separator*: `string` that will replace the separator between elements. Default is `-`

```javascript
erid.generate(['color', 'action', 'adjective', 'animal', 'number'], 500, ' | ');
// brown | bouncing | happy | owl | 351
```

### erid.getIDSpace([*elements*], *maxNumber*)

To find out the ID space of your current configuration, we provided a simple way to check.  
Just use the same arguments you plan to use and
the size of the id space will be returned.

```javascript
erid.getIDSpace(['color', 'action', 'adjective', 'animal', 'number'], 500);
// 26,129,180,000
```
