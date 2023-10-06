import { useState } from 'react';

const ButtonStatusTask = ({ task }) => {
  const [completed, setCompleted] = useState(false);

  const toggleStatus = () => {
    setCompleted(!completed);
  };

  return (
    <>
      <button onClick={toggleStatus}>{completed ?  'Finish' : 'In progress'}</button>
    </>
  );
};

export default ButtonStatusTask;