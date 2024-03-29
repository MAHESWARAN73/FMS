import 'react-native-gesture-handler';
import React from 'react';

import {DataProvider} from './src/hooks';
import AppNavigation from './src/navigation/App.js';


export default function App() {

  return (
    <DataProvider>
      <AppNavigation/>
    </DataProvider>
  );
}
