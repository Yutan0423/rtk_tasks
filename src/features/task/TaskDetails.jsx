import React from 'react';
import styles from './TaskDetails.module.css';
import { selectSelectedTask } from './taskSlice';
import { useSelector } from 'react-redux';

const TaskDetails = () => {
  const selectedTask = useSelector(selectSelectedTask);

  return (
    <div className={styles.details}>
      {selectedTask.title && (
        <>
          <h2>{selectedTask.title}</h2>
          <p>Created at </p>
          <h3>{selectedTask.created_at}</h3>
          <p>updated at </p>
          <h3>{selectedTask.updated_at}</h3>
        </>
      )}
    </div>
  );
};

export default TaskDetails;
