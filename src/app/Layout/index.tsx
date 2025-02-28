import Header from './Header';
import Main from './Main';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <>
      <div className="flex h-screen w-full bg-gray-200">
        <Sidebar />
        <div className="flex w-full flex-col">
          <Header />
          <Main />
        </div>
      </div>
    </>
  );
};

export default Layout;
