"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Badge,
  DropdownSection,
} from "@nextui-org/react";
import { User } from "@utils/db";

interface Props {
  user: User;
}

const UserMenu = ({ user }: Props) => {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <div className="cursor-pointer">
          <Badge content="" color="success" size="md" placement="bottom-right">
            <Avatar src={user.icon} name={user.name} />
          </Badge>
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold text-base">
            <span className="text-primary">{user.name}</span>{" "}
            <span>{user.tag}</span>
          </p>
          <p className="font-semibold text-xs">{user.email}</p>
        </DropdownItem>
        <DropdownSection title="Status">
          <DropdownItem key="status-online">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-success" />
              <p>Online</p>
            </div>
          </DropdownItem>
          <DropdownItem key="status-away">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-warning" />
              <p>Away</p>
            </div>
          </DropdownItem>
          <DropdownItem key="status-busy">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-danger" />
              <p>Busy</p>
            </div>
          </DropdownItem>
          <DropdownItem key="status-appear-offline">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-default" />
              <p>Appear Offline</p>
            </div>
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="settings">
          <DropdownItem key="home" href="/">
            Home
          </DropdownItem>
          <DropdownItem key="my-profile" href="/my-profile">
            My profile
          </DropdownItem>
          <DropdownItem key="settings" href="/settings">
            Settings
          </DropdownItem>
        </DropdownSection>
        <DropdownItem key="logout" color="danger">
          Log Out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default UserMenu;
