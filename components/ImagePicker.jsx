import React from "react";
import { StyleSheet, Text, View, Button, Image, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import Colors from "../constants/Colors";

const ImgPicker = () => {
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(
      Permissions.CAMERA,
      Permissions.CAMERA_ROLL
    );
    if (result.status !== "granted") {
      Alert.alert("Insufficient permission", "u need camera permission", [
        { text: "OK" },
      ]);
      return false;
    }
    return true;
  };
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) return;
    ImagePicker.launchCameraAsync();
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        <Text>No image picked yet</Text>
        <Image style={styles.image}></Image>
      </View>
      <Button
        onPress={takeImageHandler}
        title="Take Image"
        color={Colors.primary}
      ></Button>
    </View>
  );
};
const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ImgPicker;
