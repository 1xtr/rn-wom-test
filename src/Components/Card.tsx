import React from "react"
import {Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View} from "react-native"
import {Card, Chip} from "react-native-elements"
import {ICardProps} from "../Interfaces"

export const WOACard: React.FC<ICardProps> = ({data, open, type}) => {
  const countDownFromRegister = () => {
    const now = Math.floor(Date.now() / 1000)
    const diff = new Date(now - data.created._seconds)
    return `${diff.getSeconds()} seconds ago`
  }
  const cardProps: TouchableOpacityProps = {
    activeOpacity: 0.7,
    onPress: () => {open(data)}
  }

  return (
    <TouchableOpacity {...(type === 'small' ? cardProps : {activeOpacity: 1})}>
      <Card containerStyle={styles.card}>
        <View style={styles.cardHeader}>
          <View>
            <Chip title={`#${data.type}`} buttonStyle={styles.chip} titleStyle={styles.chipTitle} />
          </View>
          <View>
            <Text style={styles.lastSeen}>{countDownFromRegister()}</Text>
          </View>
        </View>
        <View style={styles.cardBody}>
          <View>
            <Image
              style={styles.userPic}
              source={{uri: data.user.photoURL}}/>
          </View>
          <View>
            <Text style={styles.userName}>{data.user.displayName}</Text>
          </View>
        </View>
        {
          type === 'big'
            ? (<View>
              <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci animi autem facilis magni.
                Corporis esse numquam pariatur sapiente! A asperiores aut cum inventore, labore laborum laudantium, nihil
                officia, quo quod rem rerum ullam ut. Blanditiis delectus eius ex exercitationem ipsum laudantium mollitia
                necessitatibus odit, officiis provident quidem suscipit! Aperiam!</Text>
            </View>)
            : null
        }
      </Card>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 17,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  cardHeader: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardBody: {
    display: "flex",
    flexDirection: 'row',
    marginVertical: 16,
  },
  userPic: {
    width: 50,
    height: 50,
    marginRight: 16,
    borderRadius: 25,
  },
  userName: {
    fontWeight: '900',
    fontSize: 17,
    lineHeight: 22
  },
  chip: {
    backgroundColor: '#a9eec4',
  },
  chipTitle: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
  lastSeen: {
    fontWeight: "400",
    fontSize: 14,
    lineHeight: 15,
    color: '#838EAA'
  }
});
