import { NavLink } from 'react-router-dom';

function Dashboard() {
  return (
    <>
      <NavLink to="friends">
        <div>friends-page link</div>
      </NavLink>
      <NavLink to="nitro">
        <div>nitro-page link</div>
      </NavLink>
    </>
  );
}

export default Dashboard;
