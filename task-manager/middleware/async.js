const asyncWrapper = (callBackFn) => {
  return async (req, res, next) => {
    try {
      await callBackFn(req, res, next)
    } catch (error) {
      next(error)
    }
  }
}

module.exports = asyncWrapper 