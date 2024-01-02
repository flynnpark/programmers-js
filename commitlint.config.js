module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-case': [
      2,
      'always',
      [
        'sentence-case',
        'start-case',
        'pascal-case',
        'upper-case',
        'lower-case',
      ],
    ],
    'type-enum': [
      2,
      'always',
      ['solution', 'fix', 'problem', 'test', 'setting'],
    ],
  },
};
