import { Auth } from 'aws-amplify';
import { InMemoryCache } from 'apollo-cache-inmemory';
import AWSAppSyncClient from 'aws-appsync';
import config from '../aws-exports';

const client = new AWSAppSyncClient({
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  auth: {
    type: config.aws_appsync_authenticationType,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken(),
  },
  complexObjectsCredentials: () => Auth.currentCredentials(),
  cache: new InMemoryCache(),
});
export default client;
