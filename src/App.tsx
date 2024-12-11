import { SWRConfig } from 'swr';
import Home from './pages/Home';
import { fetcher } from './utils/fetcher';

function App() {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        dedupingInterval: 2000,
      }}
    >
      <Home />
    </SWRConfig>
  );
}

export default App;
