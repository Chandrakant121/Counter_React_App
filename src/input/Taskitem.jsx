import React from "react";

function TaskItem({ title, color }) {
    return (
        <div style={{ color }}>
            <h3>{`${title}`}</h3>
        </div>
    )
}
export { TaskItem }