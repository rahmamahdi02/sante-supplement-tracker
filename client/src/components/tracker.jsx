import React, { useState } from 'react';
import { Table, Input, Button } from 'semantic-ui-react';

const Tracker = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Task</Table.HeaderCell>
          <Table.HeaderCell>Action</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tasks.map((task, index) => (
          <Table.Row key={index}>
            <Table.Cell>{task}</Table.Cell>
            <Table.Cell>
              <Button onClick={() => handleDeleteTask(index)} color="red" icon="trash" />
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell>
            <Input
              placeholder="Enter a task"
              value={newTask}
              onChange={handleInputChange}
            />
          </Table.HeaderCell>
          <Table.HeaderCell>
            <Button onClick={handleAddTask} color="green" icon="plus" />
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default Tracker;