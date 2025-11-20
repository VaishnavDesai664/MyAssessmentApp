import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { useTranslation } from "react-i18next"; 

export default function ChatScreenMain({ route, navigation }) {
  const { user } = route.params;
const { t } = useTranslation();
  const [message, setMessage] = useState("");

  // Dummy chat history
  const [chat, setChat] = useState([
    { id: "1", text: "Hello!", type: "received" },
    { id: "2", text: "Hi, How are you?", type: "sent" },
  ]);

  const sendMessage = () => {
    if (message.trim() === "") return;

    const newMsg = {
      id: Date.now().toString(),
      text: message,
      type: "sent",
    };

    setChat([...chat, newMsg]);
    setMessage("");
  };

  return (
    <View style={styles.container}>

      {/* ---------- HEADER ---------- */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        
        <View style={{ marginLeft: 140 }}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.onlineText}>
            {user.status === "online" ? t("online") : t("lastSeenRecently")}
          </Text>
        </View>

        <View style={styles.headerIcons}>
         

          <TouchableOpacity>
            <Image
              source={require("../Image/callicon.png")}
              style={styles.headerIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* ---------- CHAT LIST ---------- */}
      <FlatList
        data={chat}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageBubble,
              item.type === "sent"
                ? styles.sentMessage
                : styles.receivedMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />

      {/* ---------- MESSAGE INPUT ---------- */}
      <View style={styles.inputArea}>
        

        <TextInput
          style={styles.textInput}
          placeholder="Message"
          placeholderTextColor="#777"
          value={message}
          onChangeText={setMessage}
        />

         <TouchableOpacity onPress={sendMessage} >
          <Image
            source={require("../Image/msfSend.jpg")}
            style={[styles.icon,]}
          />
        </TouchableOpacity>

        

        <TouchableOpacity>
          <Image
            source={require("../Image/pin.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity >
          <Image
            source={require("../Image/voice.png")}
            style={[styles.icon,]}
          />
        </TouchableOpacity>

       
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  /* ---------- HEADER ---------- */
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 70,
    borderBottomWidth: 0.3,
    borderColor: "#ccc",
  },

  backArrow: {
    fontSize: 34,
    marginRight: 10,
  },

  profileImg: {
    width: 45,
    height: 45,
    borderRadius: 22,
  },

  userName: {
    fontSize: 25,
    fontWeight: "700",
    color: "#000",
  },

  onlineText: {
    fontSize: 12,
    color: "green",
  },

  headerIcons: {
    flexDirection: "row",
    marginLeft: "auto",
    gap: 20,
  },

  headerIcon: {
    width: 40,
    height: 40,

  },

  /* ---------- CHAT MESSAGES ---------- */
  messageBubble: {
    maxWidth: "70%",
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
  },

  sentMessage: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
  },

  receivedMessage: {
    backgroundColor: "#E9E9EB",
    alignSelf: "flex-start",
  },

  messageText: {
    fontSize: 15,
    color: "#000",
  },

  /* ---------- INPUT AREA ---------- */
  inputArea: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 0.3,
    borderColor: "#ccc",
    bottom:20
  },

  textInput: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 20,
    marginHorizontal: 10,
    fontSize: 15,
  },

  icon: {
    width: 25,
    height: 25,
 
  },
});
