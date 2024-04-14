import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { Button, Image } from "react-native";

export default function App() {
  const [test1, setTest1] = useState("");
  const [test2, setTest2] = useState("");
  // const result=parseInt(test1)+parseInt(test2)
  const resp = parseInt(test1) + parseInt(test2);
  const evaluate=()=>{
    let result
    try{
      setTest2("")

      result=eval(test1)
      setTest1(result.toString())
    }catch(err){
      setTest2("incomplete expression")
    }
  }
  const removechar=()=>{
    const stringres=test1.toString()
    const result = stringres.slice(0,-1)
    // setTest2(typeof(test1))
    setTest1(result)
  }
  console.log("hello")
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text>
      <Text>hello my name is suyog shrestha</Text>
     < Text> click on me</Text>
     <Image source={{uri: 'https://dfstudio-d420.kxcdn.com/wordpress/wp-content/uploads/2019/06/digital_camera_photo-980x653.jpg'}}
       style={{width: 400, height: 400}} />
      < Text>Calculator</Text>
      
      <TextInput defaultValue={test1} onChangeText={value=>setTest1(value)} placeholder='Enter the text here ' keyboardType='numeric'/> 
    
      <TextInput defaultValue={test2} onChangeText={value=>setTest2(value)} placeholder='Enter the text here ' keyboardType='numeric'/> 
      
      <Text>{resp}</Text> */}

      <Text>Calculator</Text>
      <Text>{test1}</Text>
      {test2&&<Text style={{color:"red"}}>{test2}</Text>}
      <View style={styles.box}>
        <Button
          title="1"
          style={styles.btn}
          onPress={(value) => setTest1((pre) => pre + "1")}
        />
        <Button
          title="2"
          style={styles.btn}
          onPress={(value) => setTest1((pre) => pre + "2")}
        />
        <Button
          title="3"
          style={styles.btn}
          onPress={(value) => setTest1((pre) => pre + "3")}
        />
      </View>
      <View style={styles.box}>
        <Button
          title="4"
          style={styles.btn}
          onPress={(value) => setTest1((pre) => pre + "4")}
        />
        <Button
          title="5"
          style={styles.btn}
          onPress={(value) => setTest1((pre) => pre + "5")}
        />
        <Button
          title="6"
          style={styles.btn}
          onPress={(value) => setTest1((pre) => pre + "6")}
        />
      </View>
      <View style={styles.box}>
        <Button
          title="7"
          style={styles.btn}
          onPress={(value) => setTest1((pre) => pre + "7")}
        />
        <Button
          title="8"
          style={styles.btn}
          onPress={(value) => setTest1((pre) => pre + "8")}
        />
        <Button
          title="9"
          style={styles.btn}
          onPress={(value) => setTest1((pre) => pre + "9")}
        />
      </View>
      <View style={styles.box}>
        <Button title="0" onPress={(value) => setTest1((pre) => pre + "0")} />
      </View>
      <View style={styles.box}>
        <Button
          title="+"
          style={styles.btn}
          onPress={(value) => setTest1((pre) => pre + "+")}
        />
        <Button
          title="-"
          style={styles.btn}
          onPress={(value) => setTest1((pre) => pre + "-")}
        />
        <Button
          title="*"
          style={styles.btn}
          onPress={(value) => setTest1((pre) => pre + "*")}
        />
        <Button
          title="/"
          style={styles.btn}
          onPress={(value) => setTest1((pre) => pre + "/")}
        />
        <Button
          title="<-"
          style={styles.btn}
          onPress={removechar}
        />
        <Button
          title="clear"
          style={styles.btn}
          onPress={()=>setTest1("")}
        />
        <Button
          title="="
          style={styles.btn}
          onPress={evaluate}
        />
       
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: 100,
    flexDirection: "row",
    margin: 2,
    gap: 30,
    justifyContent: "center",
  },
  btn: {
    width: 20,
    height: 20,
    padding: 15,
  },
});
