import './App.css';
import Details from './Details';
import List from './List';
import { useEffect, useState } from 'react';

function App() {

  const [dataList, setDataList] = useState([]);
  const [userId, setUserId] = useState([]);
  const [data, setData] = useState([]);

  const fetchList = (url, setState) => {
    fetch(url)
      .then(response => response.json())
      .then(data => setState(data))
  }

  useEffect(() => {
    fetchList('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json', setDataList);
  }, []);

  const SelectListItemHandler = (user) => {
    setUserId(user);
  };

  useEffect(() => {
    if (!userId) {
      return;
    } else if (userId > 0) {
      const url = "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/" + userId + ".json";
      console.log(url);
      try {
        fetchList(url, setData);
      } catch {
        console.log('fail');
      }
    }
  }, [userId]);

  return (
    <div className="App">
      <List dataList={dataList} onSelectListItem={SelectListItemHandler} />
      <Details data={data} />
    </div>
  );
}

export default App;
