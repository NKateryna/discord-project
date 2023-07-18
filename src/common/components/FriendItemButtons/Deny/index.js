import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { getFriends } from '../../../../redux/friends/selectors';
import styles from './index.module.css';
import Tooltip from '../../Tooltip';
import { DenyIcon } from '../../icons';
import {
  declineFriendInvitation,
  fetchFriends,
} from '../../../../redux/friends/actions';

export function Deny({ pageName }) {
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

  const onClickDeny = () => {
    dispatch(declineFriendInvitation(navigate, cookies, friendId))
      .then(() => dispatch(fetchFriends(navigate, cookies, pageName)))
      .catch((error) => {
        console.log(error);
      });
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
