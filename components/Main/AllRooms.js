import {StyleSheet, Text, View, ScrollView, Image, Switch} from 'react-native';
import React, {useState, useEffect} from 'react';
import {FlatGrid} from 'react-native-super-grid';
import Container from '../common/Container';
const AllRooms = () => {
  const [isEnable, setIsEnable] = useState(new Array(4).fill(true));
  const [change, setChange] = useState(true);
  const [index1, setIndex] = useState(null);
  //   useEffect(() => {
  //     console.log(index1);
  //     setIsEnable(prevState =>
  //       prevState.map((item, idx) => (idx === index1 ? !item : item)),
  //     );
  //     isEnable.map(item => {
  //       console.log(item);
  //     });
  //   }, []);
  const HanldeCheck = async index => {
    setIndex(index);
    setChange(!change);
  };
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View>
      <FlatGrid
        style={styles.flatGrid}
        itemDimension={130}
        data={['Living Room', 'Bathroom', 'Dining Room', 'Bedroom']}
        renderItem={item => (
          <Container style={styles.card}>
            <View>
              <Text style={styles.cardTitle}>{item.item}</Text>
              <Text>5 Devices</Text>
            </View>
            <View style={styles.switch}>
              <Switch
                trackColor={{false: '#767577', true: '#81b0ff'}}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={HanldeCheck}
                value={isEnable[item.index]}
              />
            </View>
          </Container>
        )}
      />
    </View>
  );
};

export default AllRooms;

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    border: '1px solid black',
    borderWidth: 1,
  },
  cardTitle: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  switch: {
    alignItems: 'flex-start',
  },
  flatGrid: {
    marginTop: 40,
  },
});
