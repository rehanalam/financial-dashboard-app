import EditProfile from '@/app/EditProfile';
import Card from '@/components/Card';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

const tabClassname = 'cursor-pointer px-4 py-2';
const selectedClassName = 'border-b-3 border-primary text-primary';

const Settings = () => {
  return (
    <Card>
      <Tabs>
        <TabList className="flex space-x-4 border-b border-gray-50 py-4 text-blue-400">
          <Tab className={tabClassname} selectedClassName={selectedClassName}>
            Edit Profile
          </Tab>
          <Tab className={tabClassname} selectedClassName={selectedClassName}>
            Preferences
          </Tab>
          <Tab className={tabClassname} selectedClassName={selectedClassName}>
            Security
          </Tab>
        </TabList>

        <TabPanel>
          <EditProfile />
        </TabPanel>

        <TabPanel>
          <div className="p-4">Preferences Content</div>
        </TabPanel>

        <TabPanel>
          <div className="p-4">Security Content</div>
        </TabPanel>
      </Tabs>
    </Card>
  );
};

export default Settings;
