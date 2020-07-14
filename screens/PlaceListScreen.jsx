import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const PlaceListScreen = () => {
  return (
    <View>
      <Text>place i love you</Text>
    </View>
  );
};

PlaceListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("NewPlace");
          }}
        ></Item>
      </HeaderButtons>
    ),
  };
};

export default PlaceListScreen;

const styles = StyleSheet.create({});
