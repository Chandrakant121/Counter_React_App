import React from "react";
import { TaskItem } from "./Taskitem";

function Task() {

    const [query, setQuery] = React.useState("")
    //    state,   setState
    const [tasks, setTasks] = React.useState([])

    const handelChange = (e) => {
        // console.log(e.target.value)
        // represent value of input box 
        const { value } = e.target
        setQuery(value)
    }

    const handleAdd = () => {
        const payload = {
            title: query,
            status: false
        };
        let newTasks = [...tasks, payload]
        setTasks(newTasks)
    };

    return (
        <div>
            <h1>Task</h1>
            <div>
                <input value={query} onChange={handelChange} placeholder="Add Text" />
                <button onClick={handleAdd}>ADD</button>
            </div>

            <div>
                {tasks.map((item, index) => {
                    return <TaskItem color={index % 2 === 0 ? "green" : "red"} {...item} />
                })}
            </div>

        </div>
    )
}
export { Task }