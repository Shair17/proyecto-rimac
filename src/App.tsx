import React from 'react';
import {StatusBar} from 'react-native';
import {Root as AppRoot} from './navigation/Root';
import {ReactQueryProvider} from './providers/ReactQueryProvider';
import {ReactNavigation} from './providers/ReactNavigation';
import {APP_COLORS} from './theme/colors';

function App() {
  return (
    <ReactQueryProvider>
      <ReactNavigation>
        <StatusBar
          backgroundColor={APP_COLORS.BACKGROUND_COLOR}
          barStyle="dark-content"
        />
        <AppRoot />
      </ReactNavigation>
    </ReactQueryProvider>
  );
}

export default App;
