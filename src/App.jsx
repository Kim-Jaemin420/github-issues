import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { IssueDetail, IssueList } from './pages';
import { Layout } from './components';
import { ISSUE_DETAIL_PAGE, ISSUE_LIST_PAGE } from './consts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path={ISSUE_LIST_PAGE} element={<IssueList />} />
            <Route path={ISSUE_DETAIL_PAGE} element={<IssueDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
