'use strict';

import { Router } from 'express';
const router  = Router();

let demoTodos = [{
    "name": "test todo",
    "desc": "do some todo",
    "status": false,
    "id": 1
  },
  {
    "name": "test todo",
    "desc": "do some todo",
    "status": false,
    "id": 2
  }
];

/**
 * Get todos data
 * @type {GET}
 */
router.get('/', (req, res) => {
  res.status(200).json(demoTodos);
});

router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);

  let todo = demoTodos.filter(item => item.id === id);

  res.status(200).json(todo);
});

router.post('/', (req, res) => {
  let { name, desc, status } = req.body;

  const lastTodo = demoTodos[demoTodos.length - 1];

  let todo = {
    name: name,
    desc: desc,
    status: status,
    id: parseInt(lastTodo.id) + 1
  };

  demoTodos.push(todo);

  res.status(201).json({"statusText": "Created"});
});

router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let { name, desc, status } = req.body;

  demoTodos.map(item => {
    if(parseInt(item.id) === id) {
      item.name = name;
      item.desc = desc;
      item.status = status;
    }

    return item;
  });

  res.status(200).json({"statusText": "Updated"});

});


router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  let newTodos = demoTodos.filter(item => item.id !== id);

  demoTodos = newTodos;

  res.status(200).json({"statusText":"Deleted"});
});

export default router;
