import {
  Pressable,
  StyleSheet,
  Text,
  View,
  PressableProps,
} from "react-native";
import React from "react";

type Button = {
  title: string;
  rightIcon?: React.ReactNode;
} & PressableProps;
// & ComponentProps<typeof Pressable>;

const Button = ({ title, rightIcon, ...pressableProps}: Button) => {
  return (
    <Pressable style={styles.btn} {...pressableProps}>
      <Text style={styles.btnText}>{title}</Text>
      <View style={styles.rightIcon}>{rightIcon}</View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: 1.5,
  },
  rightIcon: {
    position: "absolute",
    right: 20,
  },
});
