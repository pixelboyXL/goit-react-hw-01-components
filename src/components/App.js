import data from 'base/data';
import friends from 'base/friends';
import transactions from 'base/transactions';
import user from 'base/user';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/Friend/FriendList';

export const App = () => {
  return (
    <div>
      <Profile userData={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friendsData={friends}/>
    </div>
  );
};

/* <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      React homework template
    </div> */