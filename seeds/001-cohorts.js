
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
  .truncate()//resets id to zero after all deleted so id doesn't begin where it left off
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {name: 'Web19'},
        { name: 'Web20'},
        {name: 'Web21'}
      ]);
    });
};
