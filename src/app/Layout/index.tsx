import Header from "./Header"
import Main from "./Main"
import Sidebar from "./Sidebar"

const Layout = () => <>
    <div className="w-full h-screen flex bg-gray-200 ">
        <Sidebar />
        <div className="w-full flex flex-col">
            <Header />
            <Main />
        </div>
    </div>
</>

export default Layout