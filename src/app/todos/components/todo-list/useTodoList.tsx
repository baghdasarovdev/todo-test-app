import { trpc } from "@/app/_trpc/client";

export default function useTodoList() {
  return trpc.getTodos.useQuery();
}
