import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { getFriends } from '../../../../redux/friends/selectors';
import { fetchFriends, unblockFriend } from '../../../../redux/friends/actions';
import styles from './index.module.css';
import Tooltip from '../../Tooltip';
import { UnblockUserIcon } from '../../icons';

export function UnblockUser({ pageName }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();
  const friendsData = useSelector(getFriends);
  const friendId = friendsData.activeItem._id;

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
    dispatch(unblockFriend(navigate, cookies, friendId))
      .then(() => dispatch(fetchFriends(navigate, cookies, pageName)))
      .catch((error) => {
        console.log(error);
      });
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
