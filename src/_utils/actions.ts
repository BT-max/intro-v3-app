"use server";
import prisma from "@/_utils/db";
import { revalidatePath } from "next/cache";

export const createTodo = async (formData: FormData) => {
  const title = formData.get("title")?.toString() ?? "";
  const description = formData.get("description")?.toString() ?? "";
  if (!title) {
    throw new Error("Title is required");
  }
  await prisma.todo.create({
    data: {
      title: title,
      description: description,
    },
  });
  revalidatePath("/todos");
};
