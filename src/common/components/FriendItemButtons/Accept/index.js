import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';
import { getFriends } from '../../../../redux/friends/selectors';
import { acceptFriendInvitation } from '../../../../redux/friends/actions';
import styles from './index.module.css';
import Tooltip from '../../Tooltip';
import { AcceptIcon } from '../../icons';

export function Accept({ pageName }) {
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

  const onClickAccept = () => {
    dispatch(acceptFriendInvitation(navigate, cookies, friendId, pageName));
  };

  return (
    <div className={styles.background} onClick={onClickAccept}>
      <Tooltip title="Accept" placement="top" popperProps={popperProps}>
        <div className={styles.icon}>
          <AcceptIcon />
        </div>
      </Tooltip>
    </div>
  );
}

export default Accept;
