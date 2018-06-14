"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var todo_service_1 = require("../todo.service");
var TodoComponent = /** @class */ (function () {
    function TodoComponent(todoStore, changeTodo) {
        this.changeTodo = changeTodo;
        this.head_title = 'todos';
        this.newTodoText = '';
        this.filterargs = {};
        this.allStorage = [];
        this.todoStore = todoStore; // ******
        this.checkOnclick('all');
    }
    TodoComponent.prototype.ngOnInit = function () {
    };
    TodoComponent.prototype.addTodo = function (text) {
        this.newTodoText = text;
        if (this.newTodoText) {
            this.todoStore.add(this.newTodoText);
            this.newTodoText = '';
        }
        //this.checkOnclick('all');
    };
    TodoComponent.prototype.stopEditing = function (todo, editedTitle) {
        todo.title = editedTitle;
        todo.editing = false;
    };
    TodoComponent.prototype.cancelEditing = function (todo) {
        todo.editing = false;
    };
    TodoComponent.prototype.updateEditing = function (todo, editedTitle) {
        editedTitle = editedTitle.trim();
        todo.editing = false;
        if (editedTitle.length === 0) {
            return this.todoStore.remove(todo);
        }
        todo.title = editedTitle;
        this.todoStore.updateStore();
    };
    TodoComponent.prototype.editTodo = function (todo) {
        todo.editing = true;
    };
    TodoComponent.prototype.removeCompleted = function () {
        this.todoStore.removeCompleted();
    };
    TodoComponent.prototype.toggleCompletion = function (todo) {
        this.todoStore.toggleCompletion(todo);
    };
    TodoComponent.prototype.remove = function (todo) {
        this.todoStore.remove(todo);
    };
    TodoComponent.prototype.checkOnclick = function (status) {
        //console.log(status);
        switch (status) {
            case 'completed': {
                this.clickCompleted = true;
                this.clickActive = false;
                this.clickAll = false;
                this.filterargs = { completed: true };
                break;
            }
            case 'active': {
                this.clickCompleted = false;
                this.clickActive = true;
                this.clickAll = false;
                this.filterargs = { completed: false };
                break;
            }
            case 'all': {
                this.clickCompleted = false;
                this.clickActive = false;
                this.clickAll = true;
                this.filterargs = { all: true };
                break;
            }
        }
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'app-todo',
            templateUrl: './todo.component.html',
            styleUrls: ['./todo.component.css']
        }),
        __metadata("design:paramtypes", [todo_service_1.TodoStore,
            core_1.ChangeDetectorRef])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=todo.component.js.map