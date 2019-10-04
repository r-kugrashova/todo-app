import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {changeTodo} from "./redux/reducers/todos/actions";
import {changeFilter} from "./redux/reducers/filter/actions";
import {newTodo} from "./redux/reducers/todos/actions";

import './App.css';
import AddToDo from './Components/AddToDo';
import HeaderToDo from './Components/HeaderToDo';
import TodoList from './Components/TodoList';
import VisibilityFilters from './Components/VisibilityFilters';


class TodoApp extends Component {

  render() {
      const {todos, changeTodo, filters, changeFilter, newTodo} = this.props;
      return (
          <div>
              <HeaderToDo/>
              <VisibilityFilters
                  onChange={changeFilter}
                  filters={filters}
              />
              <TodoList
                  onChange={changeTodo}
                  todos={todos}
                  filters={filters}
              />
              <AddToDo
                  createTodo={newTodo}
              />
          </div>
      )
  }
}

const mapStateToProps = (state) => ({
    todos: state.todos,
    filters: state.filters,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    changeTodo,
    changeFilter,
    newTodo,

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)
