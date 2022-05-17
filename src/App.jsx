import { Switch, Route, useHistory } from 'react-router-dom';
import Colors from './views/Colors/Colors';
import ColorDetail from './views/ColorDetail/ColorDetail';
import style from './App.css';
import { useState } from 'react';

export default function App() {
  const history = useHistory();
  const [search, setSearch] = useState();

  function handleRefresh(e) {
    e.preventDefault();
    localStorage.clear();
    location.reload();
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(search);
    history.push(`/colors/${search}`);
  }

  function handleChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  return (
    <main>
      <nav>
        <h1 className={style.title}>RandoColor Generator</h1>
        <div className={style.interactions}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="search">Search by Hex</label>
            <input
              name="search"
              id="search"
              type="text"
              // data-testId="search"
              placeholder="#152fa3"
              value={search}
              onChange={handleChange}
            />
          </form>
          <button onClick={handleRefresh} className={style.refreshColors}>
            Refresh Colors
          </button>
        </div>
      </nav>

      <Switch>
        <Route path="/colors/:hex">
          <ColorDetail />
        </Route>
        <Route path="/colors">
          <Colors />
        </Route>
        <Route path="/">{history.push('/colors')}</Route>
      </Switch>
    </main>
  );
}
