/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createExtension('pgcrypto', { ifNotExists: true });

  pgm.createTable('schedules', {
    id: {
      type: 'UUID',
      primaryKey: true,
      default: pgm.func('gen_random_uuid()'),
    },

    class_code: {
      type: 'VARCHAR(10)',
      notNull: true,
    },
    class_name: {
      type: 'VARCHAR(10)',
      notNull: true,
    },
    subject_code: {
      type: 'VARCHAR(10)',
      notNull: true,
    },
    teacher_nik: {
      type: 'VARCHAR(20)',
      notNull: true,
    },
    teacher_name: {
      type: 'VARCHAR(100)',
      notNull: true,
    },
    date: {
      type: 'DATE',
      notNull: true,
    },
    jam_ke: {
      type: 'INTEGER',
      notNull: true,
    },
    time_start: {
      type: 'TIME',
      notNull: true,
    },
    time_end: {
      type: 'TIME',
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('achievements');
};
