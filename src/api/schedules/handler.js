const { formatStudentSchedules, formatTeacherSchedules } = require('../../utils');

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

  getStudentSchedulesHandler = async (request) => {
    const { class_code = '', date = '' } = request.query;

    const schedules = await this._service.getStudentSchedules(class_code, date);
    const studentSchedules = formatStudentSchedules(schedules);

    return studentSchedules;
  };

  getTeacherSchedulesHandler = async (request) => {
    const { teacher_nik = null, start_date = null, end_date = null } = request.query;

    const schedules = await this._service.getTeacherSchedules(teacher_nik, start_date, end_date);
    const teacherSchedules = formatTeacherSchedules(schedules, start_date, end_date);

    return teacherSchedules;
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

  deleteScheduleByIdHandler = async (request) => {
    const { id } = request.params;

    await this._service.deleteScheduleById(id);

    return {
      status: 'success',
      message: 'Schedule berhasil dihapus',
    };
  };

  putScheduleHandler = async (request, h) => {
    this._validator.validateSchedulePayload(request.payload);

    const { id } = request.params;
    await this._service.putSchedule(id, request.payload);

    const response = h.response({
      status: 'success',
      message: 'Schedule item berhasil diperbarui',
    });
    response.code(201);
    return response;
  };
}

module.exports = SchedulesHandler;
