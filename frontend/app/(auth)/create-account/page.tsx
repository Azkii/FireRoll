import Image from "next/image";
import styles from "../styles.module.css";
import { Button, Input } from "@nextui-org/react";

export default function CreateAccount() {
  return (
    <section className={styles.wrapper}>
      <Image src={"/logo.svg"} width={80} height={80} alt={"FireRoll logo"} />
      <h1>Create new account</h1>
      <Input />
      <Input />
      <Button />
    </section>
  );
}
