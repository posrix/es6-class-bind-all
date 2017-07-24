## Problem

As you see, too many `.bind()` operations in constructor. Once you have tons of classes
are called in callback or whatever something change it's scope, it will be horribly troublesome.

```js
class Person {
  constructor() {
    this.name = 'Jack'
    this.age = 20
    this.gender = 'male'

    this.setName = this.setName.bind(this)
    this.setAge = this.setAge.bind(this)
    this.setGender = this.setGender.bind(this)
  }
  setName(name) {
    this.name = name
  }
  setAge(age) {
    this.age = age
  },
  setGender(gender) {
    this.gender = gender
  }
}
```

## Easy Way

Bind all methods in constructor.

```js
import es6ClassBindAll from 'es6-class-bind-all'

class Person {
  constructor() {
    this.name = 'Jack'
    this.age = 20
    this.gender = 'female'

    es6ClassBindAll(this)
  }
  setName(name) {
    this.name = name
  }
  setAge(age) {
    this.age = age
  },
  setGender(gender) {
    this.gender = gender
  }
}
```

Or you can bind specified methods in constructor depend on your situation.

```js
import es6ClassBindAll from 'es6-class-bind-all'

class Person {
  constructor() {
    this.name = 'Jack'
    this.age = 20
    this.gender = 'female'

    es6ClassBindAll(this, ['setGender'])
  }
  setName(name) {
    this.name = name
  }
  setAge(age) {
    this.age = age
  },
  setGender(gender) {
    this.gender = gender
  }
}
```

## Install

```bash
yarn add es6-class-bind-all --dev
```

or npm

```bash
npm install es6-class-bind-all --save-dev
```

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
