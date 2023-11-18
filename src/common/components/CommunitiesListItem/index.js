import { useState } from 'react';
import { CommunitiesMembersOffline } from '../icons';
import styles from './index.module.css';

function CommunitiesListItem({
  bcg,
  icon,
  name,
  description,
  members,
  onClick,
}) {
  const [fallbackBcg, setFallbackBcg] = useState(false);
  const [fallbackIcon, setFallbackBcgIcon] = useState(false);

  return (
    <div className={styles.item} onClick={onClick}>
      <div className={styles.bcg}>
        {bcg && !fallbackBcg ? (
          <img src={bcg} onError={() => setFallbackBcg(true)} alt={''} />
        ) : null}
      </div>
      <div className={styles.info}>
        {icon && !fallbackIcon ? (
          <div className={styles.iconBox}>
            <img
              className={styles.icon}
              src={icon}
              onError={() => setFallbackBcgIcon(true)}
              alt={''}
            />
          </div>
        ) : null}
        <div className={styles.name}>{name}</div>
        <div className={styles.description}>{description}</div>
        {members ? (
          <div className={styles.members}>
            <span className={styles.status}>
              <CommunitiesMembersOffline />
            </span>
            {`${members} Members`}
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default CommunitiesListItem;
