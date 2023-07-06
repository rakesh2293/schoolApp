exports.getBadRequest = (err) => ({
    status: 500,
    error: null,
    errorMessage: err,
    message:null,
    data:null
})
  
exports.getSuccessResponse = (result) => ({
    status: 200,
    error: null,
    errorMessage: null,
    message: 'Success',
    data: result
})

exports.getCreationResponse = (res) => ({
    status: 201,
    error: null,
    errorMessage: null,
    message: 'Created Successfully',
    data:res
})

exports.getException = (err) => ({
    status: 500,
    error: err,
    errorMessage: 'Something went wrong',
    message:null,
    data:null
})