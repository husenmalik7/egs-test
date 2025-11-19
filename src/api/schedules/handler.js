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
    const {
      class_code,
      class_name,
      subject_code,
      teacher_nik,
      teacher_name,
      date,
      jam_ke,
      time_start,
      time_end,
    } = request.payload;

    const scheduleId = await this._service.addSchedule({
      class_code,
      class_name,
      subject_code,
      teacher_nik,
      teacher_name,
      date,
      jam_ke,
      time_start,
      time_end,
    });

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
