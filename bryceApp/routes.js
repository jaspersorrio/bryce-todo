var express = require('express');
var router = express.Router();
var Todo = require('./models/todo');
// INPUT LIBRARIES
// CODE MAGIC START


// to add get route for localhost/api/test, do router.get('/test', function(req, res){});
// to add post route for localhost/api/data, do router.post('/data', function(req, res){});
// to add delete route for localhost/api/data, do router.delete('/data', function(req, res){});
router.get('/test/:a', function(req, res){

  // make new todo
  var todo = new Todo({
    text:req.params.a
  })

  // add(save) it to db
  todo.save(function(err){

    // if there is an error, tell us
    if(err){
      throw err;
    }


    // now find all todos
    Todo.find({}, function(err, todo){
      // res(respond) with json of todo;
      res.json(todo);
    });

  });
});

// create a route to get all todos in the db
// create a route to post new todos to the db. you will receive data in req.body in the form {text:"the text iteself"}
// create a route to delete checked todos









// CODE MAGIC ENDS
// OUTPUT
module.exports = router;
