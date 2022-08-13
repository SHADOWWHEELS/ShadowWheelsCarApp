import { Image, StyleSheet, Text, View } from "react-native"
import React from "react"

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../Assets/images/logo.png")}
            resizeMode='center'
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>SHADOW WHEELS</Text>
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(241, 245, 249)",
  },
  card: {
    padding: 20,
    elevation: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: 200,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%",
    height: "80%",
  },
  text: {
    fontSize: 20,
    fontWeight: "800",
    fontStyle: "italic",
    textAlign: "center",
    color: "hsl(0, 0%, 20%)",
  },
})
