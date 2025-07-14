import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function Input({ onAdd }: { onAdd: (title: string) => void }) {
  const [text, setText] = useState("");
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Task Title"
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <Button
        title="Add"
        onPress={() => {
          if (text.trim()) {
            onAdd(text);
            setText("");
          }
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", margin: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 10,
    padding: 8,
  },
});
