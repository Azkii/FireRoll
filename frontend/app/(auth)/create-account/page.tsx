import { Button, Input, Link } from "@nextui-org/react";
import { ROUTES } from "@utils/constants/routes";
import styles from "../styles.module.css";

export default function Login() {
  return (
    <>
      <h1 className="text-4xl mb-2">Create account</h1>
      <div className={styles.action}>
        <Input radius="sm" label="Name" variant="bordered" />
        <Input radius="sm" type="email" label="Email" variant="bordered" />
        <Input
          radius="sm"
          type="password"
          label="Password"
          variant="bordered"
        />
        <Input
          radius="sm"
          type="password"
          label="Confirm Password"
          variant="bordered"
        />
        <Button radius="sm">Create account</Button>
      </div>
      <p className="text-small">
        Already signed up?{" "}
        <Link size="sm" href={ROUTES.LOGIN} underline="active">
          Log in
        </Link>
      </p>
    </>
  );
}
