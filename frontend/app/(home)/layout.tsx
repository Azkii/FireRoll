import Image from "next/image";
import UserMenu from "../../components/ui-components/UserMenu";

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
            priority
          />
        </div>
        <div className="flex items-center gap-4">
          <UserMenu />
        </div>
      </nav>
      <main className="p-6">{children}</main>
    </section>
  );
}
