import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
  },
  searchBar: {
    marginTop: 20,
  },
  item: {
    color: 'tomato',
    marginTop: 10,
  },
  message: {
    paddingVertical: 20,
    fontSize: 30,
  },
  result: {
    marginTop: 30,
    fontWeight: 'bold',
  },
  warningContainer: {
    width: 200,
    height: 50,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
  },
  warning: {
    fontSize: 20,
    fontWeight: '300',
  },
});
