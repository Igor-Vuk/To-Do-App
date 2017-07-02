'use strict';

import { Router } from 'express';
const router  = Router();
const {Todo} = require("../models/todo")
// const {mongoose} = require("../db/mongoose")
// const {Todo} = require("../models/todo")

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
    completed: req.body.completed
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
    foundObject.completed = req.body.completed
    foundObject.save((e, updatedTodo) => {
      if(err) {
        res.status(400).send(e)
      } else {
        res.send(updatedTodo)
      }
    })
  })
})

/*router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id)

  let todo = demoTodos.filter(item => item.id === id)

  res.status(200).json(todo)
})



router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id)
  let { name, desc, status } = req.body

  demoTodos.map(item => {
    if(parseInt(item.id) === id) {
      item.name = name
      item.desc = desc
      item.status = status
    }

    return item
  })

  res.status(200).json({"statusText": "Updated"})

})


*/

export default router
