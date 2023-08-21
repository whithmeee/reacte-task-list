import React from 'react';

const TODOS_INITIAL = [
    { id: 1, title: 'Open eyes', done: true },
    { id: 2, title: 'Brush your teeth', done: false },
    { id: 3, title: 'Have breakfast', done: false },
];

function Index() {
    const [tasks, setTasks] = React.useState(TODOS_INITIAL);

    const [newTask, setNewTask] = React.useState('');

    const doneTaskHendler = (todo) => {
        setTasks(tasks.map((task) => (task.id === todo.id ? { ...task, done: !task.done } : task)));
    };

    const newTaskChange = (e) => {
        setNewTask(e.target.value);
    };

    const addNewTask = () => {
        let taskObj = {
            id: new Date(),
            title: newTask,
            done: false,
        };
        setTasks([...tasks, taskObj]);
        setNewTask('');
    };

    const removeTasks = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <>
            <div>
                <input type="text" value={newTask} onChange={newTaskChange} />
                <button onClick={addNewTask}>Add new Task</button>
            </div>
            <ul>
                {tasks.map((todo) => (
                    <li key={todo.id} className={todo.done ? 'task-done' : ''}>
                        {todo.title}
                        <button onClick={() => doneTaskHendler(todo)}>done</button>
                        <button onClick={() => removeTasks(todo.id)}>remove</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Index;
