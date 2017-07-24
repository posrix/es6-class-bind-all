const allMethods = targetClass => {
  const propertys = Object.getOwnPropertyNames(Object.getPrototypeOf(targetClass))
  propertys.splice(propertys.indexOf('constructor'), 1)
  return propertys
}

export default (targetClass, methodNames = []) => {
  for (const name of !methodNames.length ? allMethods(targetClass) : methodNames) {
    targetClass[name] = targetClass[name].bind(targetClass)
  }
}
