import styles from './index.module.css';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { InputAdornment, InputBase } from '@mui/material';
import { getServers } from '../../redux/servers/selectors';
import Cookies from 'universal-cookie';
import { useNavigate } from 'react-router-dom';
import {
  fetchCommunities,
  joinNewServer,
  savingSearchCommunitiesList,
} from '../../redux/servers/actions';
import NavigationBarItem from '../../common/components/NavigationBarItem';
import UserPanel from '../../common/components/UserPanel';
import CommunitiesListItem from '../../common/components/CommunitiesListItem';
import {
  ChannelSearchIcon,
  DiscoverSearchBcg,
  SearchIcon,
} from '../../common/components/icons';
import { Server } from '../../types/components-types';
import { ServersState } from '../../redux/servers/types';
import { EventInput } from '../../types';
import { useAppThunkDispatch } from '../../hooks';

function GuildDiscovery() {
  const dispatch = useAppThunkDispatch();

  const navigate = useNavigate();
  const cookies = new Cookies();
  const serversData: ServersState = useSelector(getServers);
  const { communities, communitiesSearch, toggleSearch } = serversData;

  useEffect(() => {
    dispatch(fetchCommunities(navigate, cookies));
    // eslint-disable-next-line
  }, []);

  const [searchValue, setSearchValue] = useState('');
  const searchValueChange = (event: EventInput) => {
    setSearchValue(event.target.value);
  };
  useEffect(() => {
    if (!!searchValue) {
      const communitiesSearch = communities.filter((community: Server) => {
        return community.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      dispatch(savingSearchCommunitiesList(communitiesSearch, true));
    } else dispatch(savingSearchCommunitiesList([], false));
  }, [searchValue, communities, dispatch]);

  const onClickCommunity = (community: Server) => {
    return () => {
      dispatch(joinNewServer(navigate, cookies, community));
    };
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.navigationBar}>
        <div className={styles.navigationBar_title}>{'Discover'}</div>
        <div className={styles.navigation}>
          <NavigationBarItem
            name={'Home'}
            icon={<ChannelSearchIcon />}
            color={'brandColor'}
            active={true}
          />
        </div>
        <UserPanel />
      </div>
      <div className={styles.contentWrapper}>
        <div className={styles.searchBlock}>
          <DiscoverSearchBcg />
          <div className={styles.searchBlock_box}>
            <div className={styles.searchBlock_title}>
              {'Find your community on Discord'}
            </div>
            <div className={styles.searchBlock_subtitle}>
              {'From gaming, to music, to learning, there’s a place for you.'}
            </div>
            <InputBase
              value={searchValue}
              onChange={searchValueChange}
              placeholder={'Explore communities'}
              className={styles.searchBlock_search}
              endAdornment={
                <InputAdornment position="end">
                  <SearchIcon className={styles.searchBlock_searchIcon} />
                </InputAdornment>
              }
              name="Search"
              type={'search'}
            />
          </div>
        </div>
        {communities ? (
          <div className={styles.communitiesList}>
            <div className={styles.communitiesList_title}>
              {'Featured communities'}
            </div>
            <div className={styles.communitiesList_items}>
              {toggleSearch
                ? communitiesSearch.map((community: Server) => {
                    const { _id, name, photo } = community;
                    return (
                      <CommunitiesListItem
                        key={_id}
                        name={name}
                        photo={photo}
                        onClick={onClickCommunity(community)}
                        description={
                          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veritatis, harum esse amet nihil quo ducimus.'
                        }
                        members={'1'}
                      />
                    );
                  })
                : communities.map((community) => {
                    const { _id, name, photo } = community;
                    return (
                      <CommunitiesListItem
                        name={name}
                        photo={photo}
                        key={_id}
                        onClick={onClickCommunity(community)}
                        description={
                          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae veritatis, harum esse amet nihil quo ducimus.'
                        }
                        members={111}
                      />
                    );
                  })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default GuildDiscovery;
