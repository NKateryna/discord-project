import styles from './index.module.css';
import Tooltip from '../../Tooltip';
import { MessageIcon } from '../../icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addingСonversation } from '../../../../redux/conversations/actions';

export function Message({ activeFriendItem }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  const onClickMessage = () => {
    const { _id, ...sender } = activeFriendItem;
    dispatch(
      addingСonversation({
        _id,
        sender,
      })
    );
    navigate(`/channels/@me/${_id}`);
  };

  return (
    <div className={styles.background} onClick={onClickMessage}>
      <Tooltip title="Message" placement="top" popperProps={popperProps}>
        <div className={styles.icon}>
          <MessageIcon />
        </div>
      </Tooltip>
    </div>
  );
}

export default Message;
