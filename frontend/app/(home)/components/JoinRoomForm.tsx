"use client";
import { Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { joinRoomFormSchema } from "./schema";
import { useRouter } from "next/navigation";

export const JoinRoomForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ code: string }>({
    resolver: zodResolver(joinRoomFormSchema),
  });
  const onSubmit: SubmitHandler<{ code: string }> = ({ code }) => {
    setIsSubmitting(true);
    router.push(`/games/${code}`);
  };

  return (
    <form className="flex gap-2" onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("code")}
        size="lg"
        radius="sm"
        type="text"
        placeholder="Room code"
        labelPlacement="outside"
        disabled={isSubmitting}
        errorMessage={
          <div className="text-left mt-1">{errors?.code?.message}</div>
        }
      />
      <Button size="lg" radius="sm" type="submit" isLoading={isSubmitting}>
        {isSubmitting ? "" : "Join"}
      </Button>
    </form>
  );
};
