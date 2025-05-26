import type { AdminInfoType } from "../../types/types"

interface Props{
    admin: AdminInfoType;
}

const AdminInfo = ( { admin }: Props ) => {
  return (
    <div>
        <p>User Info</p>
        <p>{admin.id}</p>
        <p>{admin.name}</p>
        <p>{admin.email}</p>
        <p>{admin.role}</p>
        <p>{admin.lastLogin.toLocaleString()}</p>
    </div>
  )
}

export default AdminInfo