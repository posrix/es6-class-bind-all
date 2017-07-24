const allMethods = () => {
  const propertys = Object.getOwnPropertyNames(Object.getPrototypeOf(target))
  return propertys.splice(propertys.indexOf('constructor'), 1)
}

export default (target, methodNames = []) => {
  for (const name of !methodNames.length ? allMethods(target) : methodNames)
    target[name] = target[name].bind(target)
}
