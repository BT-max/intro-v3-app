import { NextRequest, NextResponse } from "next/server";
import prisma from "@/_utils/db";

export const GET = async () => {
  const todos = await prisma.todo.findMany({});
  return NextResponse.json({ data: todos }, { status: 200 });
};

export const POST = async (request: NextRequest) => {
  const data = await request.json();
  if (!data.title)
    return NextResponse.json({ error: "Title is required" }, { status: 400 });
  const todo = await prisma.todo.create({ data });
  return NextResponse.json({ data: todo }, { status: 201 });
};
