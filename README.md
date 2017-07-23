# Problem

```js
class Eat {
  constructor() {
    this.apple = 10
    this.banna = 20
    this.watermelon = 2

    this.eatApple = this.eatApple.bind(this)
    this.eatBanna = this.eatBanna.bind(this)
    this.watermelon = this.watermelon.bind(this)
  }
  eatApple(amount) {
    this.apple = this.apple - amount
  }
  eatBanna(amount) {
    this.banna = this.banna - amount
  },
  eatWatermelon(amount) {
    this.watermelon = this.watermelon - amount
  }
}
```
As you see, too many bind operations in constructor. Once you have tons of classes
are called in callback or whatever something change it's scope, it will be horribly troublesome.

# Fix

```js
import es6ClassBindAll from 'es6-class-bind-all'

class Eat {
  constructor() {
    this.apple = 10
    this.banna = 20
    this.watermelon = 2

    es6ClassBindAll(this)
  }
  eatApple(amount) {
    this.apple = this.apple - amount
  }
  eatBanna(amount) {
    this.banna = this.banna - amount
  },
  eatWatermelon(amount) {
    this.watermelon = this.watermelon - amount
  }
}
```

There you go.

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
