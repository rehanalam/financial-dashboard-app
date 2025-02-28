import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const Dashboard = lazy(() => import('@/pages/Dashboard'));
const Settings = lazy(() => import('@/pages/Settings'));
const CreditCards = lazy(() => import('@/pages/CreditCards'));

const Content = () => {
  return (
    <div className="bg-secondary w-full overflow-y-auto p-8">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/credit-cards" element={<CreditCards />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Content;
