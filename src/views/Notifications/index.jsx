import useMediumPublications from 'Hooks/useMediumPublications';

import { ComposedLayout as Layout } from 'Components/Layout';
import EmptyNotifications from './Components/EmptyNotifications';
import NotificationsList from './Components/NotificationsList';

function Notifications() {
  const { publications } = useMediumPublications();

  return (
    <Layout title="Notifications">
      {publications.length === 0 ? (
        <EmptyNotifications />
      ) : (
        <NotificationsList items={publications} />
      )}
    </Layout>
  );
}
export default Notifications;
