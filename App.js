/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, {} from 'react';
import RootController from './source/navigations/RootController';
import {Provider} from 'react-redux';
import {store, persistor} from './source/utills/store';
import {PersistGate} from 'redux-persist/lib/integration/react';
import {
  View,
  StyleSheet,
} from 'react-native';

function App() {
  
  return (
    <View style={styles.container}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>   
            <RootController />     
      </PersistGate>
    </Provider>
    </View>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
export default App;
