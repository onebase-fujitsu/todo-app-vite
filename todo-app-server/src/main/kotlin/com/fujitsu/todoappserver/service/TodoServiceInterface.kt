package com.fujitsu.todoappserver.service

import com.fujitsu.todoappserver.model.NewTodo
import com.fujitsu.todoappserver.model.Todo

interface TodoServiceInterface {
    fun getTodos(): List<Todo>
    fun createTodo(newTodo: NewTodo): Todo
}