
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', function(tbl) {
      //fn that makes primary key called id, auto increments and is an integer
      tbl.increments()

      //fns that make a varchar called name, with 128 length, is unique, and not null
      tbl.string('name', 128)
      .notNullable()
      .unique()
  })
};

exports.down = function(knex, Promise) {
  //delete changes
  return knex.scheme.dropTableIfExists('cohorts')
};



// // new changes to the db schema (structure of db)
// exports.up = function(knex, Promise) {
//   return knex.schema.createTable('roles', function(tbl) {
//       //primary key called id, auto increments, integer
//     tbl.increments();

//     //a varchar called name, 128, unique, not null
//     tbl.string('name', 128)
//     .notNullable()
//     .unique()
    
//   })
// };
// //how to undo the changes to the schema from above
// exports.down = function(knex, Promise) {
//   //drop = delete in tables
//   return knex.schema.dropTableIfExists('roles');
// };