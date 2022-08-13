import { StyleSheet, TextInput, View } from "react-native"
import React from "react"

const FormInput = ({
  name,
  value,
  placeholder,
  secureTextEntry,
  handleChangeText,
  adornment: Adornment,
}) => {
  return (
    <View style={styles.container}>
      {Adornment && <View style={styles.adornment}>{Adornment}</View>}
      <View style={styles.inputContainer}>
        <TextInput
          value={value}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onChangeText={text => handleChangeText(name, text)}
        />
      </View>
    </View>
  )
}

export default FormInput

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderWidth: 1,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderColor: "rgb(226, 232, 240)",
    backgroundColor: "rgb(241, 245, 249)",
  },
  adornment: {
    width: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  inputContainer: {
    width: "85%",
  },
})
