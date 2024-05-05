import { StyleSheet, TextInput, View } from "react-native";

function AppInput({ placeholderText = "input", setValue, value }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder={placeholderText}
        onChangeText={(newText) => setValue(newText)}
        defaultValue={value}
        secureTextEntry
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    width: "80%",
    marginTop: 20,
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 50,
  },
  input: {
    height: 50,
  },
});
export default AppInput;
