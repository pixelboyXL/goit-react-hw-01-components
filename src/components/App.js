import data from 'base/data';
import friends from 'base/friends';
import transactions from 'base/transactions';
import user from 'base/user';
import { GlobalStyle } from './GlobalStyle';
import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { Box } from './Box';


export const App = () => {
  return (
    <Box as='main' display="flex" flexWrap="wrap" alignItems="center" justifyContent="space-evenly">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friendsData={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Box>
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