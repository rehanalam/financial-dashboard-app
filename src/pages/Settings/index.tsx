import EditProfile from '@/app/EditProfile';
import Card from '@/components/Card';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const Settings = () => {
  return (
    <Card>
      <Tabs>
        <TabList className="flex space-x-4 border-b border-gray-50 py-4 text-blue-400">
          <Tab className="cursor-pointer px-4 py-2" selectedClassName="border-b-3 border-primary text-primary">
            Edit Profile
          </Tab>
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
