import styles from './index.module.css';

function SeparatorMessagesList({ messagesDate }) {
  return (
    <div className={styles.separator}>
      <div className={styles.date}>{messagesDate}</div>
    </div>
  );
}

export default SeparatorMessagesList;
