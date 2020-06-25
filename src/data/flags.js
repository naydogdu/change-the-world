const flagFiles = require.context('!@svgr/webpack!./flags', false, /\.svg$/)

const flagList = flagFiles.keys().reduce((files, path) => {
  const key = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
  files[key] = flagFiles(path).default
  return files
}, {})

export default flagList
