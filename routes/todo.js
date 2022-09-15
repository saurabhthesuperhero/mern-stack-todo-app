// router/todo.js
const express = require("express");
const router = express.Router();
const helper = require("../services/helper")


const {
    getAllTodo,
    postCreateTodo,
    putUpdateTodo,
    deleteTodo,
} = require("../controllers/todo");

/**
 * @route GET api/todo
 * @description get all todo
 * @access public
 */
//  router.get("/", getAllTodo);
router.get("/", async function(req, res, next) {
    try {
      res.json(await helper.getMultiple(req.query.page));
    } catch (err) {
      console.error(`Error while data `, err.message);
      next(err);
    }
  });


 /**
  * @route POST api/todo
  * @description add a new todo
  * @access public
  */
 router.post("/", postCreateTodo);
 
 /**
  * @route PUT api/todo/:id
  * @description update todo
  * @access public
  */
 router.put("/:id", putUpdateTodo);
 
 /**
  * @route DELETE api/todo/:id
  * @description delete todo
  * @access public
  */
 router.delete("/:id", deleteTodo);

module.exports = router;