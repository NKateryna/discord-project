import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { adornment, stylesMUI } from './styles';
import { Button, Input, InputAdornment } from '@mui/material';
import { SearchIcon } from '../icons';
import classNames from 'classnames';
import Cookies from 'universal-cookie';
import {
  savingSearchFriends,
  sendInvitationAnotherUser,
} from '../../../redux/friends/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getFriends } from '../../../redux/friends/selectors';

const useStyles = makeStyles(stylesMUI);

function Search({ addFriendPage = false }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cookies = new Cookies();

  const friendsData = useSelector(getFriends);
  const friendsAll = friendsData.data;

  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');
  const [searchAddSuccess, setSearchAddSuccess] = useState(false);
  const [searchAddError, setSearchAddError] = useState(false);

  const searchValueChange = (event) => {
    setSearchAddSuccess(false);
    setSearchAddError(false);
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (!addFriendPage) {
      if (!!searchValue) {
        const arrayFilterFriends = friendsAll.filter((friend) => {
          return friend.username
            .toLowerCase()
            .includes(searchValue.toLowerCase());
        });
        dispatch(
          savingSearchFriends(
            arrayFilterFriends,
            arrayFilterFriends.length,
            true
          )
        );
      } else dispatch(savingSearchFriends([], 0, false));
    }
  }, [addFriendPage, searchValue, friendsAll, dispatch]);

  const onKeyDownSearch = (event) => {
    if (event.key === 'Enter') {
      if (addFriendPage) {
        friendRequest();
      }
    }
  };

  const checkingSearchAddFriend = (value) => {
    let username = null,
      hash = null;
    const USERNAME_REGEX = new RegExp(/^((.+?)#\d{4})$/);

    setSearchAddSuccess(false);
    setSearchAddError(false);

    if (USERNAME_REGEX.test(value)) {
      [username, hash] = value.split('#');
    } else {
      setSearchAddError(true);
    }

    return [username, hash];
  };

  const friendRequest = async () => {
    const [username, hash] = checkingSearchAddFriend(searchValue);
    if (username && hash) {
      try {
        const searchStatus = await dispatch(
          sendInvitationAnotherUser(navigate, cookies, username, hash)
        );
        searchStatus ? setSearchAddSuccess(true) : setSearchAddError(true);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <Input
        value={searchValue}
        onKeyDown={onKeyDownSearch}
        onChange={searchValueChange}
        placeholder={addFriendPage ? 'Enter a Username#0000' : 'Search'}
        className={
          addFriendPage
            ? classNames(classes.inputAddFriendPage, {
                [classes.searchAddSuccess]: searchAddSuccess,
                [classes.searchAddError]: searchAddError,
              })
            : classes.inputDefault
        }
        endAdornment={
          addFriendPage ? (
            <InputAdornment position="end">
              <Button
                onClick={friendRequest}
                disabled={!searchValue}
                className={classes.buttonStyle}
                disableRipple={true}
              >
                Send Friend Request
              </Button>
            </InputAdornment>
          ) : (
            <InputAdornment sx={adornment} position="end">
              <SearchIcon className={classes.searchIcon} />
            </InputAdornment>
          )
        }
        name="Search"
        type={'search'}
        disableUnderline={true}
      />
      {addFriendPage && searchAddSuccess && (
        <div
          className={classNames(
            classes.searchAddHelpText,
            classes.searchAddHelpTextSuccess
          )}
        >
          {`Success! Your friend request to `}
          <span className={classes.searchAddSuccessFriendName}>
            {searchValue}
          </span>
          {` was sent.`}
        </div>
      )}
      {addFriendPage && searchAddError && (
        <div
          className={classNames(
            classes.searchAddHelpText,
            classes.searchAddHelpTextError
          )}
        >
          Hm, didn’t work. Double check that the username is correct.
        </div>
      )}
    </>
  );
}

export default Search;
