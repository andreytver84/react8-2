import './App.css';
import List from './List';
import Details from './Details';
import { useEffect, useState } from 'react';

function App() {

  const [dataList, setDataList] = useState([]);
  const [userId, setUserId] = useState([]);

  function fetchList(url, setState) {
    fetch(url)
      .then(response => response.json())
      .then(data => setState(data))
  }

  useEffect(() => {
    fetchList('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json', setDataList);
  }, []);

  const SelectListItemHandler = (user) => {
    setUserId(user);
    console.log(userId);
  };

  return (
    <div className="App">
      <List dataList={dataList} onSelectListItem={SelectListItemHandler} />
      <Details info={userId} />
    </div>
  );
}

export default App;
