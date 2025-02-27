import Title from "@/components/Title"
import Avatar from "@/components/Avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import SettingsIcon from "@/assets/icons/settings-outlined-icon.svg?react";
import NotificationsIcon from "@/assets/icons/notifications-outlined-icon.svg?react";

const USER_IMAGE_URL = "https://plus.unsplash.com/premium_photo-1682144187125-b55e638cf286?q=80&w=5670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

const Header = () => {
    return <div className="w-full flex justify-between bg-white h-[100px] border-b border-gray-300 items-center px-8">
        <Title size="lg">Overview</Title>
        <div className="right">  </div>
        <div className="left flex items-center gap-8">
        <Input 
            className="mb-0 bg-gray-200 rounded-[40px] border-0 min-w-64"
            placeholder="Search for something"/>
        <Button variant="secondary" size="icon">
          <SettingsIcon />
          </Button>
          <Button variant="secondary" size="icon">
          <NotificationsIcon />
          </Button>
          
          <Avatar src={USER_IMAGE_URL} size="lg"/>
        </div>
  
    </div>
    
}

export default Header