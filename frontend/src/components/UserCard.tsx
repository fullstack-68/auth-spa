import { FC } from "react";
import type { User } from "../types/api";
interface Props {
  user: User | null | undefined;
}

const UserCard: FC<Props> = ({ user }) => {
  if (!user) return <></>;
  return (
    <article style={{ width: "100%" }}>
      {user.avatarURL && (
        <div className="avatar-wrapper">
          <img src={user.avatarURL} className="avatar" />
        </div>
      )}
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <em>{`${user.isAdmin ? "Admin" : "Regular"}`}</em>
    </article>
  );
};

export default UserCard;
