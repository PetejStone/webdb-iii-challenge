const knex = require('knex');
const knexConfig = {
    client: 'sqlite3',
    connection: {
      filename: './data/lambda.db3'
    },
    useNullAsDefault: true
  }
  const db = knex(knexConfig)


module.exports = {
     find,
     findById,
     update,
     remove, 
     add
}

function find() {
    return db('students')
}

function findById(id) {
    return db('students').where({id: id})
}

function update(id, changes) {
    return db('students').where({id: id}).update(changes)
}

function update(id, changes) {
    return db('students').where({id: id}).update(changes)
}

function remove(id) {
    return db('students').where({id: id}).del()
}

function add(body) {
    return db('students').insert(body)
}