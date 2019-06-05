// endpoints here

const Cohorts = require('./cohorts-model.js')
const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    //res.send('hello world')
    Cohorts.find()
    .then(cohorts => {
      res.status(200).json({cohorts})
    })
    .catch(err => {
      res.status(500).json({message: err})
    })
  })
  
router.get('/:id', validateCohortId, async (req, res) => {

   Cohorts.findById(req.params.id)
    .then(cohort => {
        res.status(200).json({cohort})
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
})
  
router.post('/', validatePost, (req,res) => {
    Cohorts.add(req.body)
    .then(newItem => {    
        res.status(201).json({newItem})
    })
    .catch(err => {
     
        res.status(500).json({message: err})
        
    })
})
  
router.delete('/:id', validateCohortId, async (req, res) => {
    Cohorts.remove(req.params.id)
    .then(cohort => {

        res.status(200).json({message: 'You have deleted this item'})
    
    })
    .catch(err => {
        res.status(500).json({message: err})
    })
 })
  
router.put('/:id', validateCohortId, validatePost, async (req, res) => { 
    Cohorts.update(req.params.id, req.body)
    .then(cohort => {
        res.status(200).json({cohort})
    })
    .catch(err => {
        res.status(500).json({message: err})    
    })
})

  async function validateCohortId( req, res, next) {
 
    const id = await Cohorts.findById(req.params.id);
  if (id.length !== 0) {
    next()
  } else {
    res.status(400).json({message: "Invalid cohort id"})
  }
  };

  function validatePost(req, res, next) {
    const body = Object.keys(req.body);//converts object to array to get length
    const cohort = req.body;
    if (cohort && cohort.name) {
      next();
    }
    if (body.length <= 0)  {
      res.status(400).json({message: 'missing cohort data'})
    }
    if ( !cohort.name ) {
      res.status(400).json({message: 'missing required name field'})
    }
  };

  module.exports = router;