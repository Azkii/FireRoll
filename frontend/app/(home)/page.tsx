import { Button, Input } from "@nextui-org/react";
import React from "react";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <section className="max-w-2xl w-full flex flex-col text-center gap-4">
        <h1 className="text-3xl font-bold">Join room</h1>
        <form className="flex items-center gap-2">
          <Input
            size="lg"
            radius="sm"
            type="text"
            placeholder="Room code"
            labelPlacement="outside"
          />
          <Button size="lg" radius="sm">
            Join
          </Button>
        </form>
      </section>
    </div>
  );
}
