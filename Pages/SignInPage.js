import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import AppInput from "../Components/AppInput";
import AppTypography from "../Components/AppTypography";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{ uri: "https://picsum.photos/200" }}
      />
      <AppTypography
        text="Esoft Solution"
        type={"h1"}
        otherStyle={{ marginTop: 20 }}
      />
      <AppInput
        placeholderText="Enter your email address"
        setValue={setUsername}
        value={username}
      />
      <AppInput
        placeholderText="Enter your Password"
        setValue={setPassword}
        value={password}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
});
