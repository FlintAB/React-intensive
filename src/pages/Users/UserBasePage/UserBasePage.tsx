import type { FC } from "react"
import { Outlet } from "react-router-dom"
import { UserTabs } from "../../../widgets/UserTabs/UserTabs";

export const UserBasePage: FC = () => {
   return (
      <>
      <UserTabs/>
      <Outlet/>
      </>
   )
}