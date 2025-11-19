class SchedulesHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;
  }

  getSchedulesHandler = async () => {
    const schedules = await this._service.getSchedules();
    return {
      status: 'success',
      data: {
        schedules,
      },
    };
  };

  postScheduleHandler = async (request, h) => {
    this._validator.validateSchedulePayload(request.payload);
    const { name, year } = request.payload;

    const scheduleId = await this._service.addSchedule({ name, year });

    const response = h.response({
      status: 'success',
      message: 'Schedule berhasil ditambahkan',
      data: {
        scheduleId,
      },
    });
    response.code(201);
    return response;
  };
}

module.exports = SchedulesHandler;
