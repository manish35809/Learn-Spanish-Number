import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Audio } from "expo-av";
import Logo from "./assets/logo.png";

const listBackgroundColors = {
  1: "#E74292",
  2: "#01CBC6",
  3: "#BB2CD9",
  4: "#8B78E6",
  5: "#00CCCD",
  6: "#EA7773",
  7: "#2B2B52",
  8: "#F3B431",
  9: "#53E0BC",
  10: "#E44236",
};

const soundList = {
  1: require("./assets/one.wav"),
  2: require("./assets/two.wav"),
  3: require("./assets/three.wav"),
  4: require("./assets/four.wav"),
  5: require("./assets/five.wav"),
  6: require("./assets/six.wav"),
  7: require("./assets/seven.wav"),
  8: require("./assets/eight.wav"),
  9: require("./assets/nine.wav"),
  10: require("./assets/ten.wav"),
};

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      darkMode: false,
    };
  }

  changeTheme = () => {
    if (this.state.darkMode === false) {
      this.setState({
        darkMode: true,
      });
      return Alert.alert("Dark Mode Turned On");
    }
    this.setState({
      darkMode: false,
    });
    return Alert.alert("Dark Mode Turned Off");
  };

  playsound = async (number) => {
    const soundObject = new Audio.Sound();
    try {
      let path = soundList[number];
      await soundObject.loadAsync(path);
      await soundObject
        .playAsync()
        .then(async (playbackStatus) => {
          setTimeout(() => {
            soundObject.unloadAsync();
          }, playbackStatus.playableDurationMillis);
        })
        .catch((error) => {
          console.log(error);
          alert("An Error Occured while Playing the Sound: One");
        });
    } catch (error) {
      console.log(error);
      alert("An Error Occured while Playing the Sound: Two");
    }
  };

  render() {
    return (
      <ScrollView
        style={styles.container}
        backgroundColor={this.state.darkMode ? "#000" : "#FFF"}
      >
        <View style={styles.header}>
          <LinearGradient
            colors={["#BB2CD9", "#E74292"]}
            style={styles.linearHeadFoot}
            start={[0, 1]}
            end={[1, 0]}
          >
            <Text style={styles.heading}> ==|| Spanish Numbers ||== </Text>
          </LinearGradient>
        </View>
        <View style={styles.gridContainer}>
          <Image source={Logo} style={styles.logo} />
          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[1] },
              ]}
              onPress={(e) => {
                this.playsound(1);
              }}
            >
              <Text style={styles.itemText}>One</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[2] },
              ]}
              onPress={(e) => {
                this.playsound(2);
              }}
            >
              <Text style={styles.itemText}>Two</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[3] },
              ]}
              onPress={(e) => {
                this.playsound(3);
              }}
            >
              <Text style={styles.itemText}>Three</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[4] },
              ]}
              onPress={(e) => {
                this.playsound(4);
              }}
            >
              <Text style={styles.itemText}>Four</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[5] },
              ]}
              onPress={(e) => {
                this.playsound(5);
              }}
            >
              <Text style={styles.itemText}>Five</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[6] },
              ]}
              onPress={(e) => {
                this.playsound(6);
              }}
            >
              <Text style={styles.itemText}>Six</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[7] },
              ]}
              onPress={(e) => {
                this.playsound(7);
              }}
            >
              <Text style={styles.itemText}>Seven</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[8] },
              ]}
              onPress={(e) => {
                this.playsound(8);
              }}
            >
              <Text style={styles.itemText}>Eight</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[9] },
              ]}
              onPress={(e) => {
                this.playsound(9);
              }}
            >
              <Text style={styles.itemText}>Nine</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.item,
                { backgroundColor: listBackgroundColors[10] },
              ]}
              onPress={(e) => {
                this.playsound(10);
              }}
            >
              <Text style={styles.itemText}>Ten</Text>
            </TouchableOpacity>
          </View>
          {this.state.darkMode === true ? (
            <View
              style={styles.darkCont}
              backgroundColor={this.state.darkMode ? "#FFF" : "#000"}
            >
              <Text style={[styles.darkText, { color: "#000" }]}>
                Dark Mode:{" "}
              </Text>
              <Switch
                value={this.state.darkMode}
                onValueChange={this.changeTheme}
              />
            </View>
          ) : (
            <View
              style={styles.darkCont}
              backgroundColor={this.state.darkMode ? "#FFF" : "#000"}
            >
              <Text style={[styles.darkText, { color: "#FFF" }]}>
                Dark Mode:{" "}
              </Text>
              <Switch
                value={this.state.darkMode}
                onValueChange={this.changeTheme}
              />
            </View>
          )}
        </View>
        <View style={styles.footer}>
          <LinearGradient
            colors={["#BB2CD9", "#E74292"]}
            style={styles.linearHeadFoot}
            start={[0, 1]}
            end={[1, 0]}
          >
            <Text style={styles.heading}> Made By Manish </Text>
          </LinearGradient>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
  },
  linearHeadFoot: {
    padding: 15,
    alignItems: "center",
    width: "100%",
  },
  container: {
    flex: 1,
    marginTop: 20,
  },
  gridContainer: {
    flex: 1,
    margin: 5,
  },
  logo: {
    alignSelf: "center",
  },
  rowContainer: {
    flexDirection: "row",
  },
  item: {
    flex: 1,
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
  },
  itemText: {
    color: "#FFF",
    fontSize: 30,
  },
  darkCont: {
    borderWidth: 2,
    borderColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 10,
    borderRadius: 50,
  },
  darkText: {
    padding: 5,
    fontSize: 25,
  },
  footer: {
    flex: 1,
    width: "100%",
    backgroundColor: "purple",
    alignItems: "center",
    justifyContent: "center",
  },
  footing: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
  },
});
