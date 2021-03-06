import { StatusBar } from "expo-status-bar"
import React, { useState } from "react"
import { Button, FlatList, StyleSheet, View } from "react-native"
import GoalInput from "./Components/GoalInput"
import GoalItem from "./Components/GoalItem"

export default function App() {
  // const [enteredGoal, setEnteredGoal] = useState("")
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)
  console.log("Rerendering Component!")
  console.log("Course Goals:", courseGoals)
  // const goalInputHandler = (enteredText) => {
  //   setEnteredGoal(enteredText)
  // }

  const addGoalHandler = (goalTitle) => {
    // console.log(enteredGoal)
    // setCourseGoals((currentGoals) => [...currentGoals, enteredGoal])
    if (goalTitle.length === 0) {
      return
    }
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ])
    setIsAddMode(false) //the two state changes are rerendered in the same cycle
  }

  const deleteHandler = (goalId) => {
    console.log("To be deleted:", goalId)
    console.log("Course Goals in Delete Handler:", courseGoals)
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      {/* <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View> */}
      <GoalInput
        onCancel={cancelGoalAdditionHandler}
        visible={isAddMode}
        onAddGoal={addGoalHandler}
      />
      <FlatList
        // keyExtractor={(item, index) => item.id  }
        data={courseGoals}
        renderItem={(itemData) => (
          // <View style={styles.listItem}>
          //   <Text>{itemData.item.value}</Text>
          // </View>
          <GoalItem
            id={itemData.item.id}
            onDelete={deleteHandler}
            title={itemData.item.value}
          />
        )}
      />
      {/* <ScrollView>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </ScrollView> */}

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  // inputContainer: {
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  // },
  // input: {
  //   width: "80%",
  //   borderColor: "black",
  //   borderWidth: 1,
  //   padding: 10,
  // },
  // listItem: {
  //   padding: 10,
  //   marginVertical: 10,
  //   backgroundColor: "#ccc",
  //   borderColor: "black",
  //   borderWidth: 1,
  // },
})
