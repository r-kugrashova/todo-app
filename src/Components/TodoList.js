import React, {Component} from 'react';

import Todo from './Todo';


class TodoList extends Component {
    render() {
        const {todos, onChange, filters} = this.props;

        return todos.map(todo => {
            if (filters === 'All') {
                return <Todo
                    onChange={onChange}
                    item={todo}
                    key={todo.id}
                />;
            }
            if ((filters === 'Completed') && todo.done) {
                return <Todo
                    onChange={onChange}
                    item={todo}
                    key={todo.id}
                />;
            }
                return <Todo
                    onChange={onChange}
                    item={todo}
                    key={todo.id}
                />;
            }
        );
    }
}

export default TodoList