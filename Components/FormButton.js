import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native"
import React from "react"

const FormButton = ({
  title,
  disabled = true,
  waiting = false,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      disabled={disabled || waiting}
      onPress={onPress}
    >
      {waiting ? (
        <ActivityIndicator size="small" color='#fff' />
      ) : (
        <Text style={styles.buttonTitle}>{title}</Text>
      )}
    </TouchableOpacity>
  )
}

export default FormButton

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(14, 165, 233)",
  },
  buttonTitle: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "600",
  },
})
