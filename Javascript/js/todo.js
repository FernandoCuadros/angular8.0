var $form = document.querySelector('form');
var $list = document.querySelector('.lista');
var TodoApp = /** @class */ (function () {
    function TodoApp() {
        this.API_URL = 'http://localhost:3000';
    }
    TodoApp.prototype.setEvents = function () {
        var _this = this;
        $form.addEventListener('submit', function (e) {
            e.preventDefault();
            var target = e.target;
            var value = target['tarea'].value;
            if (value.length > 2) {
                _this.saveTodo(value);
            }
        });
        $list.addEventListener('click', function (e) {
            var target = e.target;
            var id = target['id'];
            _this.removeTodo(+id);
        });
    };
    TodoApp.prototype.init = function () {
        this.loadData();
        this.setEvents();
    };
    TodoApp.prototype.removeTodo = function (id) {
        var _this = this;
        fetch(this.API_URL + "/todos/" + id, {
            method: 'DELETE'
        }).then(function (response) {
            _this.todos = _this.todos.filter(function (todo) { return todo.id !== id; });
            _this.render();
        });
    };
    TodoApp.prototype.saveTodo = function (text) {
        var _this = this;
        fetch(this.API_URL + "/todos", {
            method: 'POST',
            body: JSON.stringify({ text: text }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function (response) { return response.json(); })
            .then(function (todo) {
            _this.todos.push(todo);
            _this.render();
            $form.reset();
        });
    };
    TodoApp.prototype.loadData = function () {
        var _this = this;
        fetch(this.API_URL + "/todos")
            .then(function (reponse) { return reponse.json(); })
            .then(function (data) {
            _this.todos = data;
            _this.render();
        });
    };
    TodoApp.prototype.render = function () {
        $list.innerHTML = '';
        this.todos.forEach(function (_a) {
            var id = _a.id, text = _a.text;
            var li = document.createElement('li');
            li.setAttribute('id', "" + id);
            li.innerHTML = text;
            $list.appendChild(li);
        });
    };
    return TodoApp;
}());
document.addEventListener('DOMContentLoaded', function () {
    var todoApp = new TodoApp();
    todoApp.init();
});
