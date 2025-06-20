import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-add-todo',
  imports: [FormsModule],
  templateUrl: './add-todo.html',
  styleUrl: './add-todo.css',
})
export class AddTodo {
  title!: string;
  desc!: string;
  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();
  
  onSubmit() {
    const todo ={
      sno : 8,
      title : this.title,
      desc : this.desc,
      active : true
    }

    this.todoAdd.emit(todo);
  }
}
