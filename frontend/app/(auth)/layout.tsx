import Image from "next/image";
import styles from "./styles.module.css";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={styles.wrapper}>
      <Image
        src={"/logo.svg"}
        width={120}
        height={120}
        alt={"FireRoll logo"}
        priority
      />
      {children}
    </section>
  );
}
