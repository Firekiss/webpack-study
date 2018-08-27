const semver = require('semver')

// 当前进程运行的node的版本
console.log(process.version)
// 它会获取到纯粹的版本的数字信息
console.log(semver.clean(process.version))