import { useNavigation } from "expo-router";
import { Button, FlatList, View } from "react-native";
import TodoListItem from "../components/TodoListItem";
import { useTodos } from "../context/TodoContext";

export default function HomeScreen() {
  const { todos, toggleTodo } = useTodos();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, paddingTop: 50 }}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoListItem
            title={item.title}
            done={item.done}
            onToggle={() => toggleTodo(item.id)}
          />
        )}
      />
      <Button title="Add New Task" onPress={() => navigation.navigate("add")} />
    </View>
  );
}
