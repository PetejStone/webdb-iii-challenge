
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students')
    .truncate()
    .then(function () {
      // Inserts seed entrie
      return knex('students').insert([
        {name: 'Peter',
         cohorts_id: 1},

        {name: 'James',
        cohorts_id: 2},

        {name: 'John',
        cohorts_id: 4}
      ]);
    });
};
