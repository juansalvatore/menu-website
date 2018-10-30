const Validator = require('validator')
const _ = require('lodash')

module.exports = function validateMenuInput(data) {
  let errors = {}
  data.name = _.isEmpty(data.name) ? '' : data.name
  data.price = _.isEmpty(data.price) ? '' : data.price
  data.amount = _.isEmpty(data.amount) ? '' : data.amount
  data.description = _.isEmpty(data.description) ? '' : data.description

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Es necesario agregar un nombre'
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = 'Es necesario agregar un precio'
  }

  if (Validator.isEmpty(data.amount)) {
    errors.amount = 'Es necesario agregar la cantidad'
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Es necesario agregar una descripción'
  }

  return {
    errors,
    isValid: _.isEmpty(errors),
  }
}
