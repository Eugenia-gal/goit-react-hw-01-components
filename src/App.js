import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistics/Statistics';
import FriendList from './Components/FriendList/FriendList';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import user from './user.json';
import statsData from './statistical-data.json';
import friends from './friends.json';
import transactions from './transactions.json';

function App() {
  return (
    <div className="App">
      <Header />
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statsData} />
      <Statistics stats={statsData} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}

export default App;
