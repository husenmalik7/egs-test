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

function formatTeacherSchedules(schedules, start_date, end_date) {
  if (!schedules || schedules.length === 0) return [];

  const teacher_name = schedules[0].teacher_name;
  const periode = {
    start_date,
    end_date,
  };

  const classSchedules = schedules.map((item) => {
    return {
      date: new Date(item.date).toISOString().split('T')[0],
      class_name: item.class_name,
      subject_code: item.subject_code,
      jam_ke: item.jam_ke,
      time_start: item.time_start,
      time_end: item.time_end,
    };
  });

  const total_jp = classSchedules.length;

  const teacherSchedules = {
    teacher_name,
    periode,
    total_jp,
    jadwal: classSchedules,
  };

  return teacherSchedules;
}

function formatReport(schedules, start_date, end_date) {
  if (!schedules || schedules.length === 0) return [];

  const periode = {
    start_date,
    end_date,
  };

  const uniqueTeachers = [...new Set(schedules.map((item) => item.teacher_nik))];
  const total_pengajar = uniqueTeachers.length;

  const map = {};

  for (const item of schedules) {
    const teacher_nik = item.teacher_nik;
    const teacher_name = item.teacher_name;
    const class_name = item.class_name;
    const jam_ke = item.jam_ke;

    if (!map[teacher_nik]) {
      map[teacher_nik] = {
        teacher_nik: teacher_nik,
        teacher_name: teacher_name,
        total_jp: 0,
        detail: {},
      };
    }

    map[teacher_nik].total_jp += jam_ke;
    map[teacher_nik].detail[class_name] = (map[teacher_nik].detail[class_name] || 0) + jam_ke;
  }

  const rekap = Object.values(map).map((item) => ({
    teacher_nik: item.teacher_nik,
    teacher_name: item.teacher_name,
    total_jp: item.total_jp,
    total_kelas: Object.keys(item.detail).length,
    detail: Object.keys(item.detail).map((d) => ({
      class_name: d,
      jumlah_jp: item.detail[d],
    })),
  }));

  return {
    periode,
    total_pengajar,
    rekap,
  };
}

module.exports = {
  formatStudentSchedules,
  formatTeacherSchedules,
  formatReport,
};
