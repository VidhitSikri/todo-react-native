import { api } from "@/convex/_generated/api";
import { useTheme } from "@/hooks/useTheme";
import { useQuery } from "convex/react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const { toggleDarkMode } = useTheme();

  




  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        {" "}
        Edit app/index.tsx to edit this screen.{" "}
      </Text>
      <Text>hi</Text>
      <TouchableOpacity onPress={ toggleDarkMode }>
        <Text>Toggle dark mode</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  content: {
    fontSize: 10,
  },
});
