import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from '@pages/Layout';
import HomePage from '@pages/HomePage';
import MagiPage from '@pages/MagiPage';
import StarPage from '@pages/StarPage';
import HistoryPage from '@pages/HistoryPage';
import MazzarothPage from '@pages/MazzarothPage';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        {/* Main layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/magi" element={<MagiPage />} />
          <Route path="/star" element={<StarPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/mazzaroth" element={<MazzarothPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;