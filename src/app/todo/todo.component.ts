import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Todo, TodoStore } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  ngOnInit() {
  }
  
  	head_title = 'todos';
  	todoStore: TodoStore;
	newTodoText = '';
	
	filterargs = {};

	constructor(
		todoStore: TodoStore,
		private changeTodo: ChangeDetectorRef
	) {
		this.todoStore = todoStore;   // ******
		this.checkOnclick('all');
	}
  
	addTodo(text: string) {
		this.newTodoText = text;
		if(this.newTodoText) {
		this.todoStore.add(this.newTodoText);
		this.newTodoText = '';
		}
		//this.checkOnclick('all');
	}
  
  	stopEditing(todo: Todo, editedTitle: string) {
		todo.title = editedTitle;
		todo.editing = false;
	}

	cancelEditing(todo: Todo) {
		todo.editing = false;
	}

	updateEditing(todo: Todo, editedTitle: string) {
		editedTitle = editedTitle.trim();
		todo.editing = false;

		if (editedTitle.length === 0) {
			return this.todoStore.remove(todo);
		}

		todo.title = editedTitle;
		this.todoStore.updateStore();
	}

	editTodo(todo: Todo) {
		todo.editing = true;
	}

	removeCompleted() {
		this.todoStore.removeCompleted();
	}

	toggleCompletion(todo: Todo) {
		this.todoStore.toggleCompletion(todo);
	}

	remove(todo: Todo){
		this.todoStore.remove(todo);
	}

	clickCompleted;clickActive;clickAll;
	statusSelect;
	allStorage = [];
	checkOnclick(status: string) {
		//console.log(status);
		switch(status) {
			case 'completed': { 
				this.clickCompleted=true;this.clickActive=false;this.clickAll=false;
				this.filterargs = {completed: true};
				break;
			}
			case 'active': { 
				this.clickCompleted=false;this.clickActive=true;this.clickAll=false;
				this.filterargs = {completed: false};
				break;
			}
			case 'all': { 
				this.clickCompleted=false;this.clickActive=false;this.clickAll=true;
				this.filterargs = {all: true};
				break;
			}
		}
		
	}


}
