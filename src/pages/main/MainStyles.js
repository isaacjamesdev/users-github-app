import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { FlatList } from "react-native";

export const List = styled(FlatList)`
  margin-top: 20px;
`;

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const Form = styled.View`
  flex-direction: row;
  padding-bottom: 20px;
  justify-content: space-between;
`;
export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  border-radius: 4px;
  border-bottom-width: 1px;
  border-bottom-color: #eee;
`;
export const SubmitButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background-color: #7159c1;
  border-radius: 50px;
  margin-left: 10px;
  padding: 0 10px;
  opacity: ${(props) => (props.enabled || props.loading ? 1.0 : 0.6)};
`;
