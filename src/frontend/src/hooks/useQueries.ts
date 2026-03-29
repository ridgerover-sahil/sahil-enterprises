import { useMutation } from "@tanstack/react-query";
import { useActor } from "./useActor";

export function useSubmitMessage() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async ({
      name,
      phone,
      message,
    }: {
      name: string;
      phone: string;
      message: string;
    }) => {
      if (!actor) throw new Error("Not connected");
      return actor.submitMessage(name, phone, message);
    },
  });
}
