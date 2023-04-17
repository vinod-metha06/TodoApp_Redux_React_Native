import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTodo, deleteTodos, toggleTodos} from '../redux/action';
import Reducer from '../types/reducer';

interface props {
  item: any;
  toggleTodo: any;
  deleteTodo: any;
}

const HomeScreen = () => {
  interface State {
    todoReducer: Reducer;
  }
  const todolist = useSelector((state: State) => state);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const todo = {
      id: Math.random(),
      title: inputValue,
      completed: false,
    };
    dispatch(addTodo(todo));
  };

  const toggleTodo = (id: any) => {
    dispatch(toggleTodos(id));
  };

  const deleteTodo = (id: any) => {
    dispatch(deleteTodos(id));
  };

  const TodoItem = (value: props) => {
    return (
      <View style={styles.todoItem}>
        <TouchableOpacity onPress={() => toggleTodo(value.item.id)}>
          <Text
            style={[styles.todoText, value.item.completed && styles.completed]}>
            {value.item.title}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteTodo(value.item.id)}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      <View></View>
      <TextInput
        style={styles.inputField}
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Submit" onPress={handleSubmit} />
      {todolist.todos.length == 0 ? (
        <Text style={styles.todotext}>no todos</Text>
      ) : (
        <FlatList
          data={todolist?.todos}
          renderItem={({item}) => (
            <TodoItem
              item={item}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  todotext: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 30,
    marginTop: 10,
    width: 300,
    height: 80,
    backgroundColor: '#dde3ed',
  },
  inputField: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 30,
  },
  todoText: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#ccc',
  },
  deleteText: {
    fontSize: 16,
    color: 'red',
    marginLeft: 10,
  },
  fabcontainer: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2196F3',
    elevation: 4,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: 'white',
  },
});

export default HomeScreen;
