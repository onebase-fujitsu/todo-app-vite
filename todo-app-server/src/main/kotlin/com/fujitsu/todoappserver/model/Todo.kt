package com.fujitsu.todoappserver.model

data class Todo(
    val id: Int,
    val title: String,
    val completed: Boolean
)