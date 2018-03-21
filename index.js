exports.adjectives = ['fun', 'adorable', 'sparkling', 'clever', 'smart'];
exports.animals = ['kangaroo', 'dog', 'cat', 'fish', 'octopus', 'elephant'];
exports.nautical = ['line', 'anchor', 'propeller', 'hull', 'rudder'];
exports.colors = ['red', 'green', 'blue', 'purple', 'pink', 'orange', 'gray', 'yellow'];
exports.nouns = ['car', 'shoe', 'mountain', 'river', 'ocean', 'building', 'house', 'flowers', 'clock'];
exports.verbs = ['flying', 'jumping', 'swimming', 'driving', 'playing', 'sleeping'];

function rnd(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function rndArray(array) {
  return array[rnd(array.length)];
}

exports.generate = function(list, maxRandom) {
  let componentsList = list || ['adjective', 'animal', 'number'];
  let max = maxRandom || 100;
  let readableID = [];
  let elements = {
    adjective: rndArray(exports.adjectives),
    animal: rndArray(exports.animals),
    nautical: rndArray(exports.nautical),
    color: rndArray(exports.colors),
    noun: rndArray(exports.nouns),
    verb: rndArray(exports.verbs),
    number: rnd(max)
  }

  for (var i = 0; i < componentsList.length; i++) {
    readableID.push(elements[componentsList[i]]);
  }

  return readableID.join("-");
}

for (var i = 0; i < 20; i++) {
  console.log(exports.generate());
}
