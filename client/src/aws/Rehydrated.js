import { useEffect, useState } from 'react';
import { useApolloClient } from 'react-apollo';
import AWSAppSyncClient from 'aws-appsync';

const Rehydrated = ({ children }) => {
  const client = useApolloClient();
  const [rehydrated, setState] = useState(false);

  useEffect(() => {
    if (client instanceof AWSAppSyncClient) {
      (async () => {
        await client.hydrated();
        setState(true);
      })();
    }
  }, [client]);

  return rehydrated ? children : null;
};

export default Rehydrated;
