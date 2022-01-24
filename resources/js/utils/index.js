// replaced lodash.pickBy https://stackoverflow.com/a/58186870/6597226
export const pickBy = (object, predicate = v => v) =>
  Object.entries(object)
    .filter(([k, v]) => predicate(v))
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {})

export function filesize(size) {
  var i = Math.floor(Math.log(size) / Math.log(1024))
  return (size / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
}
