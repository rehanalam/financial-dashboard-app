import Transactions from '../Transactions';

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
        <Transactions />
      </div>
    </>
  );
};

export default Dashboard;
