import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Todo, TodoStore } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

	public head_title = 'todos';
  	public todoStore: TodoStore;
	public newTodoText = '';
	public filterargs = {};
	public clickCompleted: boolean;
	public clickActive: boolean;
	public clickAll: boolean;

	ngOnInit() {
	}
  
	constructor(
		todoStore: TodoStore,
		private changeTodo: ChangeDetectorRef
	) {
		this.todoStore = todoStore; 
		this.checkOnclick('all');
	}
  
	public addTodo(text: string) {
		this.newTodoText = text;
		if(this.newTodoText) {
		this.todoStore.add(this.newTodoText);
		this.newTodoText = '';
		}
		//this.checkOnclick('all');
	}
  
  	private stopEditing(todo: Todo, editedTitle: string) {
		todo.title = editedTitle;
		todo.editing = false;
	}

	private cancelEditing(todo: Todo) {
		todo.editing = false;
	}

	public updateEditing(todo: Todo, editedTitle: string) {
		editedTitle = editedTitle.trim();
		todo.editing = false;

		if (editedTitle.length === 0) {
			return this.todoStore.remove(todo);
		}

		todo.title = editedTitle;
		this.todoStore.updateStore();
	}

	private editTodo(todo: Todo) {
		todo.editing = true;
	}

	public removeCompleted() {
		this.todoStore.removeCompleted();
	}

	public toggleCompletion(todo: Todo) {
		this.todoStore.toggleCompletion(todo);
	}

	public remove(todo: Todo){
		this.todoStore.remove(todo);
	}

	public checkOnclick(status: string) {
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
