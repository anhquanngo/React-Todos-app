import React, { memo } from 'react'

const Todo = memo(props => {
    return (
        <li>
            <div className="view">
                <input class="toggle" />
                <label>todo</label>
                <button className="destroy"></button>
            </div>
        </li>
    )
})
export default Todo
