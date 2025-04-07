import { publicProcedure, router } from "./trpc";
import { z } from "zod";
import {
  addTodoToDb,
  deleteTodoFromDb,
  getTodosFromDb,
  updateTodoInDb,
} from "./todos";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
  getTodos: publicProcedure.query(async () => {
      try {
          return await getTodosFromDb();
      } catch (err) {
          console.error("getTodos error:", err);
          throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
      }
  }),

  addTodo: publicProcedure
    .input(z.object({ text: z.string().min(1) }))
    .mutation(async ({ input }) => {
        try {
            return await addTodoToDb(input.text);
        } catch (err) {
            console.error("addTodo error:", err);
            throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        }
    }),

  deleteTodo: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
        try {
            return await deleteTodoFromDb(input.id);
        } catch (err) {
            console.error("deleteTodo error:", err);
            throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        }
    }),

  updateTodo: publicProcedure
    .input(
      z.object({
        id: z.string(),
        data: z.object({
          text: z.string().min(1).optional(),
          completed: z.boolean().optional(),
        }),
      })
    )
    .mutation(async ({ input }) => {
        try {
            return await updateTodoInDb(input.id, input.data);
        } catch (err) {
            console.error("updateTodo error:", err);
            throw new TRPCError({ code: "INTERNAL_SERVER_ERROR" });
        }
    }),
});

export type AppRouter = typeof appRouter;
