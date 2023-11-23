import { Button, Input, Link } from "@nextui-org/react";
import { ROUTES } from "@utils/constants/routes";
import styles from "../styles.module.css";

export default function Login() {
  return (
    <>
      <h1 className="text-4xl">Reset Password</h1>
      <p className=" mb-2 text-center text-default-400">
        Enter the email address associated with your account and we&apos;ll send
        you a link to reset your password.
      </p>
      <div className={styles.action}>
        <Input radius="sm" type="email" label="Email" variant="bordered" />
        <Button radius="sm">Reset password</Button>
      </div>
      <p className="text-small">
        Need to create an account?{" "}
        <Link size="sm" href={ROUTES.CREATE_ACCOUNT} underline="active">
          Sign up
        </Link>
      </p>
    </>
  );
}
