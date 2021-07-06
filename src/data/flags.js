const flagFiles = require.context('!@svgr/webpack!./flags', false, /\.svg$/)

export const allFlags = flagFiles.keys()

export const flagComponents = allFlags.reduce((files, path) => {
  const key = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
  files[key] = flagFiles(path).default

  return files
}, {})
