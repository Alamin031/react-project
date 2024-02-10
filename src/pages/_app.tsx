import React from 'react';
import '@/styles/globals.css';

import type { AppPropsWithLayout } from '@/types';
import PrivateGuard from '@/guards/PrivateGuard';

import DashboardLayout from '@/layouts/DashboardLayout';
import useFonts from '@/hooks/useFonts';
import { Provider } from 'react-redux';
import store from '@/store';
import 'react-toastify/dist/ReactToastify.css';
import { NextUIProvider } from '@nextui-org/react';
import { UsersProvider } from '@/components/context/uaersContext';
import { UserProvider } from '@/components/context/userContext';

const ComponentMap: any = {
  dashboard: ({ Component, pageProps }: AppPropsWithLayout) => (
    <PrivateGuard>
      <DashboardLayout>
        <Component {...pageProps} />
      </DashboardLayout>
    </PrivateGuard>
  ),
  none: ({ Component, pageProps }: AppPropsWithLayout) => (
    <Component {...pageProps} />
  ),
};

export default function App({
  Component,
  pageProps,
  ...rest
}: AppPropsWithLayout) {
  const { inter } = useFonts();
  const layout = Component.layout ?? 'none';
  const ModifiedComponent = ComponentMap[layout];

  return (
    <NextUIProvider>

    <Provider store={store}>
              <UsersProvider> 
              <UserProvider> 

          <div className={inter}>
            <ModifiedComponent
              Component={Component}
              pageProps={pageProps}
              {...rest}
            />
          </div>
        </UserProvider>
        </UsersProvider> 

      </Provider>
    </NextUIProvider>
  );
}
