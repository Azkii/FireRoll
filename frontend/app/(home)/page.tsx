import React from "react";
import { JoinRoomForm } from "./components/JoinRoomForm";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center">
      <section className="max-w-2xl w-full flex flex-col text-center gap-4">
        <h1 className="text-3xl font-bold">Join game</h1>
        <JoinRoomForm />
      </section>
    </div>
  );
}
