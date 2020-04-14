import React, { useEffect, useState } from "react";
import { getUser } from "../../api/userApi";
import { Container, Form, Input, SubmitButton, List } from "./MainStyles";
import { MaterialIcons } from "@expo/vector-icons";
import { Keyboard, ActivityIndicator } from "react-native";
import User from "../../Components/user/User";
import useLoading from "../../hooks/useLoading";
import { storeData, getData, removeData } from "../../utils/storageUtil";

const KEY_USERS = "@users";

const Main = ({ navigation }) => {
  const [username, setUsername] = useState();
  const [users, setUsers] = useState([]);
  const [loading, toggleLoading] = useLoading(false);

  useEffect(() => {
    getData(KEY_USERS)
      .then((data) => {
        data.map((user) => fetchUser(user));
      })
      .catch((err) => console.log(err));
  }, []);

  const fetchUser = (user) => {
    if (user) {
      toggleLoading();
      getUser(user)
        .then((response) => {
          setUsers((oldUsers) => [
            ...oldUsers,
            {
              name: response.data.name,
              login: response.data.login,
              bio: response.data.bio,
              avatar: response.data.avatar_url,
            },
          ]);
          Keyboard.dismiss();
        })
        .finally(() => {
          toggleLoading();
        });
    }
  };

  const onSubmit = (user) => {
    fetchUser(user);
    storeData(KEY_USERS, user);
  };

  return (
    <Container>
      <Form>
        <Input
          autoCapitalize="none"
          keyboardType="visible-password"
          placeholder="username"
          style={{ color: "#FFF" }}
          returnKeyType="go"
          onChangeText={(text) => setUsername(text)}
          onSubmitEditing={() => onSubmit(username)}
          value={username}
        />
        <SubmitButton
          title="OK"
          loading={loading}
          onPress={() => onSubmit(username)}
          enabled={!!username}
        >
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <MaterialIcons name="add" size={20} color="#FFF" />
          )}
        </SubmitButton>
      </Form>
      <List
        showsVerticalScrollIndicator={false}
        data={users}
        keyExtractor={(item) => item.login}
        renderItem={(data) => <User user={data.item} />}
      />
    </Container>
  );
};

export default Main;
