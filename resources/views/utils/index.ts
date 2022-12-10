// replaced lodash.pickBy https://stackoverflow.com/a/58186870/6597226
export const pickBy = (obj: object, predicate = (v: unknown) => v) =>
  Object.entries(obj)
    .filter(([k, v]) => predicate(v))
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {})

export const filesize = (size: number): string => {
  const i = Math.floor(Math.log(size) / Math.log(1024))
  return (
    parseFloat((size / Math.pow(1024, i)).toFixed(2)) * 1 +
    ' ' +
    ['B', 'kB', 'MB', 'GB', 'TB'][i]
  )
}
