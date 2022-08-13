import { StyleSheet, Text, View } from "react-native"
import React from "react"

import { useSelector } from "react-redux"
import FormButton from "../Components/FormButton"

const InfoScreen = ({ navigation }) => {
  const user = useSelector(state => state.user)
  return (
    <View style={styles.container}>
      <View style={styles.greetingContainer}>
        <Text style={styles.greeting}>Hello {user.name.split(' ')[0]} !</Text>
      </View>
      <View style={styles.buttonContainer}>
        <FormButton title='START TRACKING?' disabled={false} onPress={() => navigation.navigate('TRACKING')}/>
      </View>
    </View>
  )
}

export default InfoScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(241, 245, 249)",
  },
  greetingContainer: {
    marginBottom: 40,
  },
  greeting: {
    fontSize: 25,
    fontWeight: "600",
    color: "hsl(0, 0%, 15%)",
    textTransform: "capitalize",
  },
  buttonContainer: {
    width: "90%",
  },
})
