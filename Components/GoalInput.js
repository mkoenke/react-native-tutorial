import React, { useState } from "react"
import { Button, Modal, StyleSheet, TextInput, View } from "react-native"

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("")

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal)
    setEnteredGoal("")
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
        <View style={styles.buttons}>
          <View style={styles.button}>
            <Button title="CANCEL" color="red" onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title="ADD" onPress={addGoalHandler} />
          </View>
        </View>
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
    marginBottom: 20,
  },
  inputContainer: {
    flex: 1,
    // flexDirection: "column",
    justifyContent: "center", //space-between
    alignItems: "center",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between", //space-around
    width: "60%",
  },
  button: {
    width: "40%",
  },
})

export default GoalInput
