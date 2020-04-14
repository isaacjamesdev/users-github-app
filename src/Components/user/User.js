import React from "react";
import {
  UserContainer,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from "./UserStyles";

const User = ({ user }) => {
  return (
    <UserContainer>
      <Avatar source={{ uri: user.avatar }} />
      <Name>{user.name}</Name>
      <Bio numberOfLines={2}>{user.bio}</Bio>

      <ProfileButton>
        <ProfileButtonText>Details</ProfileButtonText>
      </ProfileButton>
    </UserContainer>
  );
};

export default User;
