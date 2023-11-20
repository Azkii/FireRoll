import styles from "../styles.module.css";
import { Button, Input, Link } from "@nextui-org/react";
import { ROUTES } from "@utils/constants/routes";

export default function Login() {
  return (
    <>
      <h1 className="text-4xl mb-2">Fire Roll</h1>
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
            href={ROUTES.FORGOT_PASSWORD}
          >
            Forgot password
          </Link>
        </div>
        <Button radius="sm">Login</Button>
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
