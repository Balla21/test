import React from 'react';
import logo from './logo.svg';
import './App.css';

import DataProvider from './components/DataProvider';
import List from './components/ListItem';

function App() {
    return(
        <DataProvider>
            <List />
        </DataProvider>
    );
  
}
export default App;
