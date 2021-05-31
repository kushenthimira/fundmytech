import React from "react";
import { View, TouchableNativeFeedback } from "react-native";
import { Card, Text, Button, Icon, Divider } from "@ui-kitten/components";

function RegularPost({ style, onPress }) {
  const UpVote = (props) => <Icon {...props} name="arrow-upward-outline" />;
  const DownVote = (props) => <Icon {...props} name="arrow-downward-outline" />;

  return (
    <TouchableNativeFeedback onPress={onPress}>
      <Card style={({ style }, { margin: "2%" })}>
        <View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text
                category="p1"
                status="primary"
                style={{ fontWeight: "bold" }}
              >
                Rs.10,000
              </Text>
              <Text category="h4" style={{ fontWeight: "bold" }}>
                Lorem Ipsum
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Button
                accessoryLeft={UpVote}
                size="small"
                status="success"
                appearance="ghost"
              />
              <Text style={{ alignSelf: "center", fontWeight: "bold" }}>
                100
              </Text>
              <Button
                accessoryLeft={DownVote}
                size="small"
                status="danger"
                appearance="ghost"
              />
            </View>
          </View>
          <Divider style={{ marginVertical: "2%" }} />
          <Text category="p2" appearance="hint" style={{ fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non
            accumsan leo. Nam lobortis dignissim nunc. Phasellus faucibus magna
            id tincidunt commodo. In suscipit dictum tempor. In hac habitasse
            platea dictumst. Proin rutrum porta nisl, eget lobortis nibh
            consectetur sed. Morbi fringilla sodales odio, non fringilla dolor
            tincidunt vel. Sed.
          </Text>
        </View>
      </Card>
    </TouchableNativeFeedback>
  );
}

export default RegularPost;
