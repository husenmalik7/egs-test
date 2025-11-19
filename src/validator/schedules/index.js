const InvariantError = require('../../exceptions/InvariantError');
const { SchedulePayloadSchema } = require('./schema');

const SchedulesValidator = {
  validateSchedulePayload: (payload) => {
    const validateResult = SchedulePayloadSchema.validate(payload);
    if (validateResult.error) {
      throw new InvariantError(validateResult.error.message);
    }
  },
};

module.exports = SchedulesValidator;
