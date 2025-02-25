import Title from "../../../components/ui/Title"

const Header = () => {
    return <div className="w-full flex justify-between bg-white h-[100px] border-b border-gray-300 items-center px-10">
        <Title size="lg">Overview</Title>
        <div className="right">
        <div></div>
        </div>
    </div>
    
}

export default Header