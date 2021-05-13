import * as React from "react";

import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import Constants from "expo-constants";

const AddTodo = ( onAddTodo:any, input:any ) => {
  const { register, setValue, handleSubmit, control } = useForm();
  const onSubmit = (data: any) => {
    data.preventDefault();
    if (!input.value.trim()) return;
    onAddTodo(input.value);
    input.value = "";
  };

  const onChange = (arg: any) => {
    return {
      value: arg.nativeEvent.text,
    };
  };

  const styles = StyleSheet.create({
    button: {
      marginTop: 40,
      color: "white",
      height: 40,
      backgroundColor: "#ec5990",
      borderRadius: 4,
    },
    container: {
      flex: 1,
      justifyContent: "center",
      paddingTop: Constants.statusBarHeight,
      padding: 8,
      backgroundColor: "#0e101c",
    },
    input: {
      backgroundColor: "white",
      borderColor: "none",
      height: 40,
      padding: 10,
      borderRadius: 4,
    },
  });

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="ToDo-Input"
        rules={{ required: true }}
      />

      <View style={styles.button}>
        <Button title="Button" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export default AddTodo