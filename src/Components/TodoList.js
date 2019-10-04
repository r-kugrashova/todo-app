import React, {Component} from 'react';

import Todo from './Todo';


class TodoList extends Component {
    render() {
        const {todos, onChange, filters} = this.props;

        return todos.map(todo => {
            if (filters[0].done) {
                return <Todo
                    onChange={onChange}
                    item={todo}
                    key={todo.id}
                />;
            }
            if (filters[1].done && todo.done) {
                return <Todo
                    onChange={onChange}
                    item={todo}
                    key={todo.id}
                />;
            }
            if (filters[2].done && !todo.done) {
                return <Todo
                    onChange={onChange}
                    item={todo}
                    key={todo.id}
                />;
            }
        });
    }
}

export default TodoList