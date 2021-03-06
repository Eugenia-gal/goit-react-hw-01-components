import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Statistics from './Components/Statistics/Statistics';
import FriendList from './Components/FriendList/FriendList';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import user from './Data/user.json';
import statsData from './Data/statistical-data.json';
import friends from './Data/friends.json';
import transactions from './Data/transactions.json';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="wrapper">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics title="Upload stats" stats={statsData} />
        {/* Для проверки правильного рендера заголовка - закомментировать строку 24, раскомментировать строку 26 */}
        {/* <Statistics stats={statsData} /> */}
        <FriendList friends={friends} />
        <TransactionHistory transactions={transactions} />
      </div>
    </div>
  );
}

export default App;
