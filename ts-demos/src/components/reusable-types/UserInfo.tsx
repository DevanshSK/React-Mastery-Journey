import type { Info } from "../../types/types"

interface Props{
    user: Info;
}

const UserInfo = ({user}: Props) => {
  return (
    <div>
        <p>User Info</p>
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.email}</p>
    </div>
  )
}

export default UserInfo