import { StyleSheet, Text, TouchableOpacity } from "react-native";


function AppButton({ text , onPress , otherStyle }) {
    return (
      <TouchableOpacity
        style={[styles.buttonContainer, styles.primaryBtn, otherStyle]}
        onPress={onPress}
      >
        <Text style={styles.primaryBtnText}>{text}</Text>
      </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
  buttonContainer: {
    width: "80%",
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryBtn: {
    backgroundColor: "#0077b6"
  },
  primaryBtnText : {
    fontWeight: "bold",
    color: "white",
    letterSpacing: 1.2
  },
  secondaryBtn: {},
});

export default AppButton;