import {
  authentication,
  createDirectus,
  DirectusClient,
  realtime,
} from '@directus/sdk';
import React from 'react';
const AppContext = React.createContext<{
  client: any;
}>({
  client: null,
});

const url = 'http://192.168.1.157:8055';

export const client = createDirectus(url)
  .with(authentication())
  .with(realtime());

const DirectusProvider = ({children}: React.PropsWithChildren) => {
  return (
    <AppContext.Provider
      value={{
        client: client,
      }}>
      {children}
    </AppContext.Provider>
  );
};

const useDirectusClient = () => React.useContext(AppContext);
export {DirectusProvider, useDirectusClient};
