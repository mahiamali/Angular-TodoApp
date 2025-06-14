import { Component, EventEmitter, input, Input, Output, output } from '@angular/core';
import { Todo } from '../../Todo';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css',
})
export class TodoItem {
  @Input() todo: Todo = new Todo();
  @Input() i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();

  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    // console.log("Delete has been clicked!");
  }

  onCheckboxClick(todo: Todo) {
    this.todoCheckbox.emit(todo);
  }
}
