const toPromise = (inputFun) => {
  //return Promise.resolve(inputFun.apply(null, arguments))
  return function(singleArg) {
    return new Promise((resolve, reject) => {
      resolve(inputFun(singleArg))
    })
  }
}
export default toPromise
