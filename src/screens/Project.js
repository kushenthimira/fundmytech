import { Text, Button, Icon } from "@ui-kitten/components";
import React from "react";
import { Image, View } from "react-native";
import Screen from "../components/Screen";

function Project({ navigation }) {
  const UpVote = (props) => <Icon {...props} name="arrow-upward-outline" />;
  const DownVote = (props) => <Icon {...props} name="arrow-downward-outline" />;
  const GiftIcon = (props) => <Icon {...props} name="gift-outline" />;

  return (
    <Screen>
      <Image
        style={{
          width: "48%",
          height: "27%",
          alignSelf: "center",
          marginBottom: "5%",
        }}
        source={require("../assets/project.png")}
      />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          category="h5"
          style={{
            fontWeight: "bold",
            textAlign: "left",
            marginBottom: "1%",
            marginHorizontal: "3%",
          }}
        >
          Lorem Ipsum
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Button
            accessoryLeft={UpVote}
            size="small"
            status="success"
            appearance="ghost"
          />
          <Text style={{ alignSelf: "center", fontWeight: "bold" }}>150</Text>
          <Button
            accessoryLeft={DownVote}
            size="small"
            status="danger"
            appearance="ghost"
          />
        </View>
      </View>
      <Text
        category="p1"
        style={{
          textAlign: "left",
          marginBottom: "4%",
          marginHorizontal: "3%",
        }}
        appearance="hint"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
        accumsan leo. Nam lobortis dignissim nunc. Phasellus faucibus magna id
        tincidunt commodo. In suscipit dictum tempor. In hac habitasse platea
        dictumst. Proin rutrum porta nisl, eget lobortis nibh consectetur sed.
        Morbi fringilla sodales odio, non fringilla dolor tincidunt vel. Sed.
      </Text>
      <Text
        category="h6"
        style={{
          fontWeight: "bold",
          textAlign: "left",
          marginBottom: "1%",
          marginHorizontal: "3%",
        }}
      >
        Budget
      </Text>
      <Text
        category="p1"
        style={{
          fontWeight: "bold",
          textAlign: "left",
          marginHorizontal: "3%",
        }}
        appearance="hint"
      >
        Rs.10,000
      </Text>
      <Button
        style={{ marginHorizontal: "2%", marginTop: "5%" }}
        status="primary"
        size="giant"
        accessoryRight={GiftIcon}
      >
        Donate
      </Button>
    </Screen>
  );
}

export default Project;
