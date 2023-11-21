"use client";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Image,
  Badge,
  DropdownSection,
} from "@nextui-org/react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <nav className="flex justify-between items-center gap-4 py-4 px-6 bg-default-50">
        <div className="flex items-center">
          <Image
            src={"/logo.svg"}
            alt={"FireRoll logo"}
            width={40}
            height={40}
          />
          <h4 className="text-2xl">Fire roll</h4>
        </div>
        <div className="flex items-center gap-4">
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <div className="cursor-pointer">
                <Badge
                  content=""
                  color="success"
                  size="md"
                  placement="bottom-right"
                >
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
                <DropdownItem key="status-online">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-warning" />
                    <p>Away</p>
                  </div>
                </DropdownItem>
                <DropdownItem key="status-online">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-danger" />
                    <p>Busy</p>
                  </div>
                </DropdownItem>
                <DropdownItem key="status-online">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-default" />
                    <p>Appear Offline</p>
                  </div>
                </DropdownItem>
              </DropdownSection>
              <DropdownSection title="settings">
                <DropdownItem key="my-profile">My profile</DropdownItem>
                <DropdownItem key="account-settings" href="/account-settings">
                  Account settings
                </DropdownItem>
                <DropdownItem key="helpAndFeedback">
                  Help & Feedback
                </DropdownItem>
              </DropdownSection>
              <DropdownItem key="logout" color="danger">
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </nav>
      <main className="p-6">{children}</main>
    </section>
  );
}
