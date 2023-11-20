import Image from "next/image";
import styles from "../styles.module.css";
import { Button, Input, Link } from "@nextui-org/react";

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
      <h1 className="text-5xl">Fire Roll</h1>
      <div className={styles.action}>
        <Input
          radius="sm"
          type="email"
          label="Email"
          variant="bordered"
          placeholder="Enter your email"
        />
        <div className="mb-1">
          <Input
            radius="sm"
            type="password"
            label="Password"
            variant="bordered"
            placeholder="Enter your password"
          />
          <Link
            className="mt-1"
            size="sm"
            underline="active"
            href="/forgot-password"
          >
            Forgot password
          </Link>
        </div>
        <Button radius="sm">Login</Button>
      </div>
      <p className="text-small">
        Need to create an account?{" "}
        <Link size="sm" href="/create-account" underline="active">
          Sign up
        </Link>
      </p>
    </section>
  );
}
