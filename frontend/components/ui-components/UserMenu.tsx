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

const UserMenu = () => {
  return (
    <Dropdown placement="bottom-end">
      <DropdownTrigger>
        <div className="cursor-pointer">
          <Badge content="" color="success" size="md" placement="bottom-right">
            <Avatar
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Calico_tabby_cat_-_Savannah.jpg/1200px-Calico_tabby_cat_-_Savannah.jpg"
              name="Next"
            />
          </Badge>
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Profile Actions" variant="flat">
        <DropdownItem key="profile" className="h-14 gap-2">
          <p className="font-semibold text-base">
            <span className="text-primary">Next</span> #666
          </p>
          <p className="font-semibold text-xs">zoey@example.com</p>
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
