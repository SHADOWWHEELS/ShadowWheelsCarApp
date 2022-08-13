import {
  Linking,
  StyleSheet,
  ToastAndroid,
  TouchableOpacity,
  Platform,
  View,
  PermissionsAndroid,
} from "react-native"
import React, { useCallback, useEffect, useRef } from "react"

import { readFile } from "react-native-fs"
import Geolocation from "react-native-geolocation-service"
import { Camera, useCameraDevices } from "react-native-vision-camera"

import { backcameraImage } from "../api"

const Tracking = () => {
  const cameraRef = useRef()

  const devices = useCameraDevices()
  const device = devices.back

  useEffect(() => {
    const requirePermisson = async () => {
      const permission = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      )

      if (permission === PermissionsAndroid.RESULTS.GRANTED)
        console.log("Permission granted")
      else console.log("Permission Not Granted")
    }

    requirePermisson()
    requestCameraPermission()
  }, [])

  const requestCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermission()

    if (permission === "denied") Linking.openSettings()
  }, [])

  const handlebackcameraImage = (file, geoCoordinates) => {
    backcameraImage({ file, geoCoordinates })
      .then(() => {})
      .catch(error => {
        console.log(error)
      })

    ToastAndroid.showWithGravity(
      "Image shared with the server",
      1,
      ToastAndroid.CENTER,
    )
  }

  const handleClickImage = async () => {
    const image = await cameraRef.current.takePhoto()
    const imageBase64 = await readFile(image.path, "base64")
    const imageBase64WithHeaders = `data:image/jpg;base64,${imageBase64}`

    const geoCoordinates = {}
    Geolocation.getCurrentPosition(
      info => {
        geoCoordinates.latitude = info.coords.latitude
        geoCoordinates.longitude = info.coords.longitude

        handlebackcameraImage(imageBase64WithHeaders, geoCoordinates)
      },
      error => {
        geoCoordinates.latitude = null
        geoCoordinates.longitude = null

        handlebackcameraImage(imageBase64WithHeaders, geoCoordinates)
      },
      {
        timeout: 20000,
        enableHighAccuracy: true,
      },
    )
  }

  return (
    <View style={styles.container}>
      {device && (
        <>
          <Camera
            device={device}
            ref={cameraRef}
            photo={true}
            isActive={true}
            style={{
              flex: 1,
            }}
          />
          <TouchableOpacity style={styles.button} onPress={handleClickImage}>
            <View style={styles.buttonRing}></View>
          </TouchableOpacity>
        </>
      )}
    </View>
  )
}

export default Tracking

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    width: 80,
    height: 80,
    bottom: 60,
    padding: 2,
    borderWidth: 6,
    borderRadius: 1000,
    borderColor: "#fff",
    alignItems: "center",
    position: "absolute",
    justifyConent: "center",
    backgroundColor: "transparent",
  },
  buttonRing: {
    width: "100%",
    height: "100%",
    borderRadius: 1000,
    backgroundColor: "#fff",
  },
})
