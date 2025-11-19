const { Pool } = require('pg');
const { nanoid } = require('nanoid');

const InvariantError = require('../../exceptions/InvariantError');
const ServerError = require('../../exceptions/ServerError');
const NotFoundError = require('../../exceptions/NotFoundError');

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

  async getStudentSchedules(class_code, date) {
    const query = {
      text: `SELECT 
                class_name,
                date,
                jam_ke,
                subject_code,
                teacher_name,
                time_start,
                time_end
              FROM schedules
              WHERE ($1 = '' OR class_code = $1)
              AND   ($2 = '' OR date = $2::date)
              `,
      values: [class_code, date],
    };

    const result = await this._pool.query(query).catch((error) => {
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

  async deleteScheduleById(id) {
    const query = {
      text: 'DELETE FROM schedules WHERE id = $1 RETURNING id',
      values: [id],
    };

    const result = await this._pool.query(query).catch((error) => {
      console.error(error);
      throw new ServerError('Internal server error');
    });

    if (!result.rows.length) {
      throw new NotFoundError('Schedule gagal dihapus. Id tidak ditemukan');
    }
  }

  async putSchedule(
    id,
    {
      class_code,
      class_name,
      subject_code,
      teacher_nik,
      teacher_name,
      date,
      jam_ke,
      time_start,
      time_end,
    }
  ) {
    const query = {
      text: `UPDATE schedules
              SET 
                class_code = $1,
                class_name = $2,
                subject_code = $3,
                teacher_nik = $4,
                teacher_name = $5,
                date = $6,
                jam_ke = $7,
                time_start = $8,
                time_end = $9
              WHERE id = $10 
              RETURNING id;`,
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
        id,
      ],
    };

    const result = await this._pool.query(query).catch((error) => {
      console.error(error);
      throw new ServerError('Internal server error');
    });

    if (!result.rowCount) {
      throw new InvariantError('Schedule gagal diubah');
    }
  }
}

module.exports = SchedulesService;
