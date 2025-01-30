package com.fujitsu.todoappserver.controller

import com.fujitsu.todoappserver.model.NewTodo
import com.fujitsu.todoappserver.model.Todo

interface TodoControllerInterface {
    fun getTodos(): List<Todo>
    fun createTodo(newTodo: NewTodo): Todo
}