import { StyleSheet, Text, View } from "react-native"
import React, { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux"
import Entypo from "react-native-vector-icons/Entypo"
import FontAwesome from "react-native-vector-icons/FontAwesome"

import FormInput from "../Components/FormInput"
import FormButton from "../Components/FormButton"
import loginAction from "../Actions/loginAction"

const LoginScreen = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    password: "",
  })
  const [loginButtonDisabled, setLoginButtonDisabled] = useState(true)
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()
  const formError = useSelector(state => state.formError)
  const formErrorMessage = useSelector(state => state.formErrorMessage)

  useEffect(() => {
    if (
      formData.phoneNumber.trim().length < 5 ||
      formData.password.trim().length < 4
    )
      setLoginButtonDisabled(true)
    else setLoginButtonDisabled(false)
  }, [formData.phoneNumber, formData.password])

  const handleChangeText = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = () => {
    setLoading(true)
    dispatch(loginAction(formData))
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>LOGIN</Text>
        </View>
        {formError && (
          <View style={styles.errorContainer}>
            <Text style={styles.error}>{formErrorMessage}</Text>
          </View>
        )}
        <View style={styles.inputContainer}>
          <View style={styles.input}>
            <FormInput
              name='phoneNumber'
              placeholder='Phone Number'
              value={formData.phoneNumber}
              handleChangeText={handleChangeText}
              adornment={<FontAwesome name='phone' size={16} />}
            />
          </View>
          <View style={styles.input}>
            <FormInput
              name='password'
              placeholder='Password'
              secureTextEntry={true}
              value={formData.password}
              handleChangeText={handleChangeText}
              adornment={<Entypo name='lock' size={16} />}
            />
          </View>
        </View>
        <View>
          <FormButton
            title='LOGIN'
            onPress={handleSubmit}
            waiting={loading}
            disabled={loginButtonDisabled}
          />
        </View>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(241, 245, 249)",
  },
  form: {
    border: 1,
    padding: 20,
    width: "95%",
    elevation: 5,
    borderRadius: 10,
    borderColor: "#bbb",
    backgroundColor: "#fff",
  },
  headingContainer: {
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 25,
    fontWeight: "800",
    color: "hsl(0, 0%, 20%)",
  },
  errorContainer: {
    marginBottom: 5,
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(252, 165, 165)",
  },
  error: {
    fontSize: 12,
    fontWeight: "700",
    color: "rgb(220, 38, 38)",
    textTransform: "uppercase",
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 15,
  },
})
