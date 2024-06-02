import React, { useState, useEffect } from 'react';
import '../App.css';


interface TodoItem {
    id: number;
    description: string;
    completed: boolean;
}

interface TodoProps {
    initialTodos?: TodoItem[];
  }

  const isLocalStorageAvailable = () => {
    try {
      const testKey = 'test';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch (error) {
      return false;
    }
  };

const Todo: React.FC<TodoProps> = ({ initialTodos = [] }) => {
    const [todos, setTodos] = useState<TodoItem[]>(() => {
        if (!isLocalStorageAvailable()) {
          return initialTodos;
        }
        const savedTodos = localStorage.getItem('todos');
        return savedTodos ? JSON.parse(savedTodos) : initialTodos;
      })
    const [newTodo, setNewTodo] = useState<string>('');
    const [filter, setFilter] = useState<'All' | 'Active' | 'Completed'>('All');


    useEffect(() => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            setTodos(JSON.parse(storedTodos));
        }
    }, []);

    useEffect(() => {
        
          try {
            localStorage.setItem('todos', JSON.stringify(todos));
          } catch (error) {
            console.error('Failed to save todos to localStorage', error);
          }
    }, [todos]);

    const handleTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    };

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            const newId = todos.length === 0 ? 1 : todos[todos.length - 1].id + 1;
            const newTodoItem: TodoItem = {
                id: newId,
                description: newTodo,
                completed: false,
            };
            setTodos([...todos, newTodoItem]);
            setNewTodo('');
        }
    };

    const toggleTodoCompletion = (id: number) => {
        
        const updatedTodos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        console.log(updatedTodos)
        setTodos(updatedTodos);
    };

    const filteredTodos = todos.filter(todo => {
        console.log("filter is set to", filter)
        if (filter === 'Active') return !todo.completed;
        if (filter === 'Completed') return todo.completed;
        return true;
    });

    return (
        <div className='todo-app'>
           
            <input type="text" value={newTodo} onChange={handleTodoChange} />
            <button onClick={addTodo}>Add Todo</button>

            <div className='filter-tasks'> 
                    <button  className={filter === 'All' ? 'active' : ''}  onClick={() => setFilter('All')}>All Tasks</button>
                    <button  className={filter === 'Active' ? 'active' : ''} onClick={() => setFilter('Active')}>Active Tasks</button>
                    <button  className={filter === 'Completed' ? 'active' : ''} onClick={() => setFilter('Completed')}>Completed Tasks</button>
                   
                </div>
            <ul className='task-list'>

                {filteredTodos.length ? filteredTodos.map(todo => (
                    <li
                        key={todo.id}
                        style={{ display:'flex', alignItems: 'center'}}
                    >
                        <input type='checkbox'  
                        onChange={() => toggleTodoCompletion(todo.id)} checked={todo.completed}/>
                        <label style={{ textDecoration: todo.completed ? 'line-through' : 'none', alignItems:'flex-end', marginBottom: 6 }}>
                        {todo.description}
                        </label>
                    </li>
                )) :
                <p>No Items in category {filter}</p>}
            </ul>
        </div>
    );
};

export default Todo;
