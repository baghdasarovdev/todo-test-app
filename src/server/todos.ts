import { clientPromise, ObjectId } from "./db";

export interface ITodo {
  _id: ObjectId;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export async function getTodosFromDb(): Promise<ITodo[]> {
  const client = await clientPromise;
  const collection = client.db("todoApp").collection<ITodo>("todos");

  return await collection.find({}).sort({ createdAt: -1 }).toArray();
}

export async function addTodoToDb(text: string): Promise<ITodo> {
  const client = await clientPromise;
  const collection = client.db("todoApp").collection("todos");

  const newTodo: Partial<ITodo> = {
    text,
    completed: false,
    createdAt: new Date(),
  };

  const result = await collection.insertOne(newTodo);
  return {
    ...(newTodo as ITodo),
    _id: result.insertedId,
  };
}

export async function deleteTodoFromDb(id: string): Promise<{ id: string }> {
  const client = await clientPromise;
  const collection = client.db("todoApp").collection("todos");

  await collection.deleteOne({ _id: new ObjectId(id) });
  return { id };
}

export async function updateTodoInDb(
  id: string,
  data: Partial<Omit<ITodo, "_id">>
): Promise<ITodo | null> {
  const client = await clientPromise;
  const collection = client.db("todoApp").collection<ITodo>("todos");

  await collection.updateOne(
    { _id: new ObjectId(id) },
    { $set: { ...data, updatedAt: new Date() } }
  );

  return await collection.findOne<ITodo>({ _id: new ObjectId(id) });
}
