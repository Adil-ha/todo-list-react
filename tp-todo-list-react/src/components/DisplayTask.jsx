import { useContext } from 'react';
import TaskContext from '../contexts/tasks.context';
import ButtonStatusTask from './ButtonStatusTask';

const DisplayTask = () => {
  const context = useContext(TaskContext);
  const tasks = context.tasks; // Utilisez context.tasks au lieu de context.Tasks

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}> {/* Accédez directement à task.id, task.name et task.deadline */}
          {task.name} (Deadline : {task.deadline})
          <ButtonStatusTask/>
        </li>
      ))}
    </ul>
  );
};

export default DisplayTask;