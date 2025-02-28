import EditProfile from '@/app/EditProfile';
import Card from '@/components/Card';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Settings = () => {
  return (
    <Card>
      <Tabs>
        <TabList className="flex space-x-4 border-b">
          <Tab className="cursor-pointer px-4 py-2">Edit Profile</Tab>
          <Tab className="cursor-pointer px-4 py-2">Preferences</Tab>
          <Tab className="cursor-pointer px-4 py-2">Security</Tab>
        </TabList>

        <TabPanel>
          <EditProfile />
        </TabPanel>

        <TabPanel>
          <div>Preferences Content</div>
        </TabPanel>

        <TabPanel>
          <div>Security Content</div>
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default Settings;
