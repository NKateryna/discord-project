import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { unblockFriend } from '../../../../redux/friends/actions';
import styles from './index.module.css';
import Tooltip from '../../Tooltip';
import { UnblockUserIcon } from '../../icons';

export function UnblockUser({ pageName, activeFriendItem }) {
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

  const onClickUnblockUser = () => {
    dispatch(unblockFriend(navigate, cookies, friendId, pageName));
  };

  return (
    <div className={styles.background} onClick={onClickUnblockUser}>
      <Tooltip title="Unblock" placement="top" popperProps={popperProps}>
        <div className={styles.icon}>
          <UnblockUserIcon />
        </div>
      </Tooltip>
    </div>
  );
}

export default UnblockUser;
