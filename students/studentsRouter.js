// endpoints here

const Students = require('./students-model.js')
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    //res.send('hello world')
    Students.find()
    .then(students => {
      res.status(200).json({students})
    })
    .catch(err => {
      res.status(500).json({message: err})
    })
  })
  
router.get('/:id', validateStudentId, async (req, res) => {

   Students.findById(req.params.id)
    .then(student => {
        res.status(200).json({student})
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})
  
router.post('/', validatePost, (req,res) => {
    Students.add(req.body)
    .then(newItem => {    
        res.status(201).json({newItem})
    })
    .catch(err => {
     
        res.status(500).json({message: err})
        
    })
})
  
router.delete('/:id', validateStudentId, async (req, res) => {
    Students.remove(req.params.id)
    .then(student => {

        res.status(200).json({message: 'You have deleted this item'})
    
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
 })
  
router.put('/:id', validateStudentId, validatePost, async (req, res) => { 
    Students.update(req.params.id, req.body)
    .then(student => {
        res.status(200).json({student})
    })
    .catch(err => {
        res.status(500).json({message: err})    
    })
})

  async function validateStudentId( req, res, next) {
 
    const id = await Students.findById(req.params.id);
  if (id.length !== 0) {
    next()
  } else {
    res.status(400).json({message: "Invalid student id"})
  }
  };

  function validatePost(req, res, next) {
    const body = Object.keys(req.body);//converts object to array to get length
    const student = req.body;
    if (student && student.name) {
      next();
    }
    if (body.length <= 0)  {
      res.status(400).json({message: 'missing student data'})
    }
    if ( !student.name ) {
      res.status(400).json({message: 'missing required name field'})
    }
  };

  module.exports = router;