import { nanoid } from "nanoid"
import React, { useState, useRef, useEffect } from "react";
import Todo from "./components/Todo";
import FilterButton from "./components/FilterButton";
import Form from "./components/Form";

//⭕️NOTE: usePrevious() を 2 つのファイルで使用しているので、効率的なリファクタリングは usePrevious() 関数を独自のファイルに移動し、そのファイルからエクスポートし、必要なところにインポートすることです。最後まで行ったら、これを演習としてやってみてください。

function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
  };

const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
    const [tasks, setTasks] = useState(props.tasks);
    const [filter, setFilter] = useState('All');

    function editTask(id, newName) {
        const editedTaskList = tasks.map(task => {
            if (id === task.id) {
                return {...task, name: newName}
            }
            return task;
        });
        setTasks(editedTaskList);
    }
    
    function toggleTaskCompleted(id) {
        const updatedTasks = tasks.map(task => {
            if (id === task.id) {
                return {...task, completed: !task.completed} //⭕️この部分「task.completed」を、入力補完で「task.toggleTask.Completed」としてしまっていた。✅入力補完使用中や使用後に、それが正しいかきちんと確認するのが良い習慣となるだろう（今のように正しい答えと見比べたりコピーしたりできない場合には、解決に非常に手間取るかもしれない）
            }
            return task;
        });
        setTasks(updatedTasks);
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter(task => id !==task.id);
        setTasks(remainingTasks);
    }
    
    const taskList = tasks
        .filter(FILTER_MAP[filter])
        .map(task => (
        <Todo
        id={task.id}
        name={task.name}
        completed={task.completed}
        key={task.id}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
        />
        ));

    const filterList = FILTER_NAMES.map(name => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ))
        
        function addTask(name) {
            const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
            setTasks([...tasks, newTask]);
        }

        const tasksNoun = taskList.length !==1 ? 'tasks' : 'task';
        const headingText = `${taskList.length} ${tasksNoun} remaining`;

        const listHeadingRef = useRef(null);  //最初よく分からなかった。なぜ適切に、下のh2の参照になるのか。 →ここではただ事前に準備しているというだけで、h2にそのまま入力すれば機能するものだからか（確証はない）

        const prevTaskLength = usePrevious(tasks.length); //⭕️「タスクの長さが変わったら」か

        useEffect(() => {
            if (tasks.length - prevTaskLength === -1) {
                listHeadingRef.current.focus();
            }
        }, [tasks.length, prevTaskLength]);
        
        return (
      <div className="todoapp stack-large">
        <h1>TodoMatic</h1>
        <Form addTask={addTask} />
        <div className="filters btn-group stack-exception">
        {filterList}
        </div>
        <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
          {headingText}
        </h2>
        <ul
          role="list"
          className="todo-list stack-large stack-exception"
          aria-labelledby="list-heading"
        >
          {taskList}
        </ul>
      </div>
    );
  }

export default App;

function Foo(props) {
  useEffect(() => {
    console.log(props.name);
  }, []); // <-- should error and offer autofix to [props.name]
}
