import { StyleSheet, Text } from "react-native";

/**
 * Description placeholder
 *
 * @param {{ text: string; type?: string; otherStyle : any; }} param0
 * @param {*} param0.text
 * @param {string} [param0.type="p"]
 * @returns {*}
 */

function AppTypography({ text, type = "p", otherStyle }) {
  return (
    <Text style={[styles.typography, styles[type], otherStyle]}>{text}</Text>
  );
}

const styles = StyleSheet.create({
  typography: {},
  h1: {
    fontWeight: "bold",
    fontSize: 40,
  },
  h2: {
    fontWeight: "800",
    fontSize: 35,
  },
  h3: {
    fontWeight: "600",
    fontSize: 30,
  },
  p: {
    fontWeight: "400",
    fontSize: 20,
  },
});

export default AppTypography;
