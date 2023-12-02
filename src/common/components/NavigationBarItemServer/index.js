import styles from './index.module.css';
import classNames from 'classnames';

function NavigationBarItemServer({ icon, name, onClick, active }) {
  return (
    <div
      className={classNames(
        styles.box,
        { [styles.boxIcon]: icon },
        { [styles.itemActive]: active }
      )}
      onClick={onClick}
      key={name}
    >
      <div className={styles.icon}>{icon}</div>
      <div className={styles.name}>{name}</div>
    </div>
  );
}

export default NavigationBarItemServer;
