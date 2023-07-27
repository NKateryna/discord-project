import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import styles from './index.module.css';
import Tooltip from '../../Tooltip';
import { DenyIcon } from '../../icons';
import { declineFriendInvitation } from '../../../../redux/friends/actions';

export function Deny({ pageName, activeFriendItem }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const { _id: friendId } = activeFriendItem;

  const popperProps = {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 3],
        },
      },
    ],
  };

  const onClickDeny = () => {
    dispatch(declineFriendInvitation(navigate, cookies, friendId, pageName));
  };

  return (
    <div className={styles.background} onClick={onClickDeny}>
      <Tooltip title="Deny" placement="top" popperProps={popperProps}>
        <div className={styles.icon}>
          <DenyIcon />
        </div>
      </Tooltip>
    </div>
  );
}

export default Deny;
