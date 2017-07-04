'use strict';

import { Router } from 'express';
const router  = Router();
const {Todo} = require("../models/todo")

// let demoTodos = [{
//     "name": "test todo",
//     "desc": "do some todo",
//     "status": false,
//     "id": 1
//   },
//   {
//     "name": "test todo",
//     "desc": "do some todo",
//     "status": false,
//     "id": 2
//   }
// ];

/**
 * Get todos data
 * @type {GET}
 */

//POST
//-------------
router.post('/', (req, res) => {
 let newTodo = new Todo({
    text: req.body.text,
    completed: req.body.completed,
    details: req.body.details
  })

  newTodo.save().then(newTodo => {
      res.send(newTodo)
  }, (e) => {
      res.status(400).send(e)
  })
})

//GET
//-------------
router.get('/', (req, res) => {
  Todo.find().then(todos => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
})

//GET DETAILS
//-------------
router.get('/:id', (req, res) => {
  console.log(req.query.id)
  let str = req.query.id
  if(str.indexOf('/') === 0) {
    str = str.substr(str.indexOf("/") + 1)
  }
  Todo.findById(str, (e, foundObject) => {
    if(e) {
        res.status(400).send(e)
      } else {
        res.send(foundObject)
      }
  })
})

//DELETE
//-------------
router.delete('/:id', (req, res) => {
  Todo.findByIdAndRemove(req.body.id).then(todo => {
        res.send({todo});
    }, (e) => {
        res.status(400).send(e);
    });
})

//PUT
//-------------
router.put('/:id', (req, res) => {
  Todo.findOne({_id:req.body.id}, (err, foundObject) => {
    if(req.body.details !== undefined) {
      foundObject.details = req.body.details
    }
    if(req.body.completed !== undefined) {
      foundObject.completed = req.body.completed
    }
    foundObject.save((e, updatedTodo) => {
      if(err) {
        res.status(400).send(e)
      } else {
        res.send(updatedTodo)
      }
    })
  })
})

export default router
