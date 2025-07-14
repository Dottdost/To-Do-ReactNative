import { MaterialCommunityIcons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  title: string;
  done: boolean;
  onToggle: () => void;
  icon?: string;
  iconColor?: string;
  time?: string;
};

export default function TodoListItem({
  title,
  done,
  onToggle,
  icon = "calendar",
  iconColor = "#EDE9FE",
  time,
}: Props) {
  return (
    <View style={[styles.card, done && styles.cardDone]}>
      <View style={[styles.iconWrapper, { backgroundColor: iconColor }]}>
        <MaterialCommunityIcons name={icon} size={20} color="#4C1D95" />
      </View>
      <View style={styles.textContainer}>
        <Text style={[styles.title, done && styles.titleDone]}>{title}</Text>
        {time && <Text style={styles.time}>{time}</Text>}
      </View>
      <Checkbox
        value={done}
        onValueChange={onToggle}
        color="#4C1D95"
        style={styles.checkbox}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    marginVertical: 8,
  },
  cardDone: {
    opacity: 0.5,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F2937",
  },
  titleDone: {
    textDecorationLine: "line-through",
    color: "#9CA3AF",
  },
  time: {
    fontSize: 12,
    color: "#6B7280",
    marginTop: 2,
  },
  checkbox: {
    marginLeft: 10,
  },
});
