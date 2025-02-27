import Title from "@/components/Title"
import SidebarNav from "./SidebarNav"

const Sidebar = () => {
    return <div className="w-[250px] bg-white border-r border-gray-300 flex flex-col">
        <div className="sidebar-header h-[100px] flex items-center justify-center border-b border-gray-300">
             <Title size="lg" className="font-extrabold">Soar Task</Title>
        </div>
        <div className="sidebar-nav">
             <SidebarNav/>
        </div>
    </div>
}

export default Sidebar