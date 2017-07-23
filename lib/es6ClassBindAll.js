export default target => {
  for (const name of Object.getOwnPropertyNames(Object.getPrototypeOf(target))) {
    if (target[name] !== 'constructor') {
      target[name] = target[name].bind(target)
    }
  }
}
