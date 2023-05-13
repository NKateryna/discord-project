import { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { adornment, stylesMUI } from './styles';
import { Button, Input, InputAdornment } from '@mui/material';
import { SearchIcon } from '../icons';
const useStyles = makeStyles(stylesMUI);

function Search({ addFriendPage = false }) {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState('');

  const searchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  const onKeyDownSearch = (event) => {
    if (event.key === 'Enter') {
      setSearchValue('');
    }
  };

  const friendRequest = () => {};

  return (
    <Input
      value={searchValue}
      onKeyDown={onKeyDownSearch}
      onChange={searchValueChange}
      placeholder={addFriendPage ? 'Enter a Username#0000' : 'Search'}
      className={
        addFriendPage ? classes.inputaddFriendPage : classes.inputDefault
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
            <SearchIcon />
          </InputAdornment>
        )
      }
      name="Search"
      type={'search'}
      disableUnderline={true}
    />
  );
}

export default Search;
