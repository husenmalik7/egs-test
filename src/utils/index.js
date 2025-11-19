function formatStudentSchedules(schedules) {
  if (!schedules || schedules.length === 0) return [];

  const class_name = schedules[0].class_name;
  const date = new Date(schedules[0].date).toISOString().split('T')[0];

  const classSchedules = schedules.map((item) => {
    return {
      jam_ke: item.jam_ke,
      subject_code: item.subject_code,
      teacher_name: item.teacher_name,
      time_start: item.time_start,
      time_end: item.time_end,
    };
  });

  const studentSchedules = {
    class_name,
    date,
    jadwal: classSchedules,
  };

  return studentSchedules;
}

module.exports = {
  formatStudentSchedules,
};
