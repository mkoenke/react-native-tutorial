import React from "react"
import { StyleSheet, Text, TouchableHighlight, View } from "react-native"

const GoalItem = (props) => {
  return (
    // <TouchableOpacity activeOpacity={0.1} onPress={props.onDelete}>
    <TouchableHighlight
      activeOpacity={0.5}
      underlayColor="blue"
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableHighlight>

    // </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
})
export default GoalItem
