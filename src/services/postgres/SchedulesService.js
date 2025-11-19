const { Pool } = require('pg');
const { nanoid } = require('nanoid');

const InvariantError = require('../../exceptions/InvariantError');
const ServerError = require('../../exceptions/ServerError');

class SchedulesService {
  constructor(cacheService) {
    this._pool = new Pool();
    this._cacheService = cacheService;
  }

  async getSchedules() {
    const result = await this._pool.query('SELECT * FROM schedules').catch((error) => {
      console.error(error);
      throw new ServerError('Internal server error');
    });

    return result.rows;
  }

  async addSchedule({
    class_code,
    class_name,
    subject_code,
    teacher_nik,
    teacher_name,
    date,
    jam_ke,
    time_start,
    time_end,
  }) {
    const query = {
      text: 'INSERT INTO schedules(class_code, class_name, subject_code, teacher_nik, teacher_name, date, jam_ke, time_start, time_end) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id',
      values: [
        class_code,
        class_name,
        subject_code,
        teacher_nik,
        teacher_name,
        date,
        jam_ke,
        time_start,
        time_end,
      ],
    };

    const result = await this._pool.query(query).catch((error) => {
      console.error(error);
      throw new ServerError('Internal server error');
    });

    const resultId = result.rows[0].id;

    if (!resultId) {
      throw new InvariantError('Schedule gagal ditambahkan');
    }

    return resultId;
  }
}

module.exports = SchedulesService;
