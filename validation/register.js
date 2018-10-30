const Validator = require('validator')
const _ = require('lodash')

module.exports = function validateRegisterInput(data) {
  let errors = {}
  data.name = _.isEmpty(data.name) ? '' : data.name
  data.email = _.isEmpty(data.email) ? '' : data.email
  data.password = _.isEmpty(data.password) ? '' : data.password
  data.password2 = _.isEmpty(data.password2) ? '' : data.password2
  data.token = _.isEmpty(data.token) ? '' : data.token

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters'
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required'
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid'
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required'
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required'
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = 'Password must be between 6 and 30 characters'
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Confirm password field is required'
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Password must match'
  }

  if (Validator.isEmpty(data.token)) {
    errors.token = 'Token field is required'
  }

  if (data.token !== 'secret123') {
    errors.token = 'Wrong token'
  }

  return {
    errors,
    isValid: _.isEmpty(errors),
  }
}
