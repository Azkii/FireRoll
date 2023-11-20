import Image from "next/image";
import styles from "../styles.module.css";

export default function Login() {
  return (
    <section className={styles.wrapper}>
      <Image
        src={"/logo.svg"}
        width={120}
        height={120}
        alt={"FireRoll logo"}
        priority
      />
      <h1 className="text-5xl">Forgot password</h1>
    </section>
  );
}
