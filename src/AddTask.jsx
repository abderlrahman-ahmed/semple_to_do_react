import React from 'react';

function AddTask({ taskText, setTaskText, addTask }) {
  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={taskText} onChange={handleInputChange} />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
