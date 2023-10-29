/* exported defaults */
function defaults(target, source) {
  for (const keySource in source) {
    let isKeyDefined = false;
    for (const keyTarget in target) {
      if (keySource === keyTarget) {
        isKeyDefined = true;
        break;
      }
    }
    if (!isKeyDefined) {
      target[keySource] = source[keySource];
    }
  }
}
