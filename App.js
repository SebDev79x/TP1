import { StyleSheet, Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native';
const data = require('./tp.json')

export default function App() {
  return (
    <View style={styles.container}>
      {
        data.map((scientist) => {
          return <View style={styles.block}>
            <Image style={styles.pic}
              source={scientist.img}></Image>
            <View style={styles.smallBlock}>
              <Text style={[styles.styleText1, styles.styleText]}>{scientist.title}</Text>

              <ScrollView> <Text style={[styles.styleText2, styles.styleText]}>{scientist.desc} </Text></ScrollView>
            </View>
          </View>
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  block: {
    flexDirection: 'row',
    flex: 1,
    padding: '10px',

  },
  pic: {
    alignItems:'start',
    flex: .25,
    height: '100px',
    width: '100px',
    marginTop:'10px'
  },
  smallBlock: {
    flex: .75,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px'

  },
  styleText: {
    alignItems: 'center',
/*     flex:1
 */  },
  styleText1: {
    /*     flex:.5,
     */
    fontSize: '15px',
  },
  styleText2: {
    /*     flex:.5,
     */
    fontSize: '10px',

  }
});
