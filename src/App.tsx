import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { ConfigProvider } from 'antd';
import { AuthInit, AuthProvider } from 'auth/core/auth-context';
import { setupAxios } from 'auth/core/auth-helpers';
import rqConfigs from 'configs/rq-configs';

import Router from 'routes/router';

setupAxios();
const queryClient = new QueryClient(rqConfigs);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AuthInit>
          <ConfigProvider
            theme={{
              token: {
                fontFamily: 'Poppins',
              },
              components: {},
            }}
          >
            <Router />
          </ConfigProvider>
        </AuthInit>
      </AuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
