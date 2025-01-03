```javascript
// bug.js (Incorrect implementation)
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }, { id: 1, name: 'Item 3' }];

const App = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    />
  );
};

export default App;

// bugSolution.js (Correct implementation)
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const data = [{ id: 1, name: 'Item 1' }, { id: 2, name: 'Item 2' }, { id: 3, name: 'Item 3' }];

const App = () => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default App;
```