import { SWRConfig } from 'swr';
import Home from './pages/Home';
import { getData } from './api/apiRequest';

function App() {
  return (
    <SWRConfig
      value={{
        fetcher: getData,
        revalidateOnFocus: false,
        dedupingInterval: 2000,
      }}
    >
      <Home />
    </SWRConfig>
  );
}

export default App;
