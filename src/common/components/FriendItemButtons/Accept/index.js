import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Cookies from 'universal-cookie';
import { acceptFriendInvitation } from '../../../../redux/friends/actions';
import styles from './index.module.css';
import Tooltip from '../../Tooltip';
import { AcceptIcon } from '../../icons';

export function Accept({ pageName, activeFriendItem }) {
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
