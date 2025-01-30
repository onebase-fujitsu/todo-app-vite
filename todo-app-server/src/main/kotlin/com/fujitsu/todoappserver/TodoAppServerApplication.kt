package com.fujitsu.todoappserver

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class TodoAppServerApplication

fun main(args: Array<String>) {
    runApplication<TodoAppServerApplication>(*args)
}
