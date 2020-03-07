export function flatten(data: Record<string, any>): Record<string, string> {
  const toReturn: Record<string, string> = {};
  for (const i in data) {
    if (typeof data[i] === "object") {
      const flatObject = flatten(data[i]);
      for (var x in flatObject) {
        toReturn[i + "." + x] = flatObject[x];
      }
    } else {
      toReturn[i] = data[i];
    }
  }
  return toReturn;
}
