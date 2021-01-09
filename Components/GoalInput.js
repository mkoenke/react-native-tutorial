import React, { useState } from "react"
import { Button, Modal, StyleSheet, TextInput, View } from "react-native"

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("")

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={() => props.onAddGoal(enteredGoal)} />
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    flex: 1,
    // flexDirection: "column",
    justifyContent: "center", //space-between
    alignItems: "center",
    marginBottom: 10,
  },
})

export default GoalInput
