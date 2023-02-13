import styles from './index.module.css';
import classNames from 'classnames';
import { Tooltip } from '@mui/material';

function SidebarItem({
  id,
  name,
  photo,
  icon,
  onClick,
  active,
  notifications,
  green,
}) {
  const styleTooltip = {
    tooltip: {
      sx: {
        backgroundColor: 'var(---gray-9)',
        '& .MuiTooltip-arrow': {
          color: 'var(---gray-9)',
        },
        fontFamily: 'Whitney',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '17px',
      },
    },
  };
  return (
    <div
      className={classNames(
        styles.box,
        { [styles.itemActive]: active },
        { [styles.itemNotifications]: notifications }
      )}
      key={id}
    >
      <Tooltip
        title={name}
        componentsProps={styleTooltip}
        placement="right"
        arrow
      >
        <div
          onClick={onClick}
          className={classNames(styles.photoBcg, { [styles.green]: green })}
        >
          {icon ? (
            <div className={styles.icon}>{icon}</div>
          ) : (
            <img src={photo} className={styles.photo} alt={name} />
          )}
        </div>
      </Tooltip>
      <div className={styles.pill}></div>
    </div>
  );
}

export default SidebarItem;
