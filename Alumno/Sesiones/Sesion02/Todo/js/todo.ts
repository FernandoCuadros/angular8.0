interface Todo {
    id: number;
    text: string;
    completed?: boolean;
}

const $form = document.querySelector('form');
const $list = document.querySelector('.lista');

class TodoApp {
    todos: Todo[];
    API_URL: string = 'http://localhost:3000';
    constructor() {}

    setEvents() {
        $form.addEventListener('submit', (e) => {
            e.preventDefault();
            const { target } = e;
            const value: string = target['tarea'].value;
            if (value.length > 2) {
                this.saveTodo(value);
            }
        });

        $list.addEventListener('click', (e) => {
            const { target } = e;
            const id = target['id'];
            this.removeTodo(+id);
        })
    }

    init() {
        this.loadData();
        this.setEvents();
    }

    removeTodo(id: number) {
        fetch(`${this.API_URL}/todos/${id}`, {
            method: 'DELETE'
        }).then(response => {
            this.todos = this.todos.filter(todo => todo.id !== id);
            this.render();
        })
    }

    saveTodo(text: string) {
        fetch(`${this.API_URL}/todos`, {
            method: 'POST',
            body: JSON.stringify({ text }),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then((todo: Todo) => {
            this.todos.push(todo);
            this.render();
            $form.reset();
        })
    }

    loadData() {
        fetch(`${this.API_URL}/todos`)
            .then((reponse) => reponse.json())
            .then(data => {
                this.todos = data;
                this.render();
            });
    }

    render() {
        $list.innerHTML = '';
        this.todos.forEach(({ id, text }: Todo) => {
            const li = document.createElement('li');
            li.setAttribute('id', `${id}`);
            li.innerHTML = text;
            $list.appendChild(li);
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const todoApp = new TodoApp();
    todoApp.init();
});