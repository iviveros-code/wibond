import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Searchbar} from 'react-native-paper';
import Data from '../../utils/FakeDate.json';
import {styles} from './styles';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  console.log(searchTerm);
  const onChangeSearch = (query) => setSearchTerm(query);
  const message = () => {
    return <Text>Sin Resultado</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchTerm}
        style={styles.searchBar}
      />
      {Data.filter((val) => {
        if (searchTerm.includes(val.name) && val.name != 0) {
          return val;
        } else message;
      }).map((item, index) => (
        <Text key={index} style={styles.item}>
          {item.name}
        </Text>
      ))}
      {searchTerm.length === 0 ? (
        <Text style={styles.message}>Ingresa una palabra en el buscador</Text>
      ) : null}
      {searchTerm != Data.name && searchTerm.length > 0 ? (
        <Text style={styles.result}>Resultado</Text>
      ) : (
        <View style={styles.warningContainer}>
          <Text style={styles.warning}>sin info</Text>
        </View>
      )}
    </SafeAreaView>
  );
};
export default Search;
