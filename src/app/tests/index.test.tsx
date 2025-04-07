import { TodoItem } from "@/app/todos/components/todo-item";
import TodoListPage from "@/app/todos/page";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { v4 as uuidv4 } from "uuid";

jest.mock("../app/_trpc/client", () => ({
  trpc: {
    useUtils: () => ({
      getTodos: {
        invalidate: jest.fn(),
        setData: jest.fn(),
      },
    }),
    getTodos: {
      useQuery: () => ({
        data: [
          {
            _id: uuidv4(),
            text: "Test Todo",
            completed: false,
            createdAt: new Date(),
          },
        ],
        isLoading: false,
      }),
    },
    addTodo: {
      useMutation: () => ({
        mutate: jest.fn(),
        isPending: false,
      }),
    },
    deleteTodo: {
      useMutation: () => ({
        mutate: jest.fn(),
      }),
    },
    updateTodo: {
      useMutation: () => ({
        mutate: jest.fn(),
      }),
    },
  },
}));

describe("TodoList Basic Tests", () => {
  test("renders todo list", () => {
    render(<TodoListPage />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });

  test("has input field for new todos", () => {
    render(<TodoListPage />);
    expect(
      screen.getByPlaceholderText("Add a new todo...")
    ).toBeInTheDocument();
  });

  test("has add button", () => {
    render(<TodoListPage />);
    expect(screen.getByText("Add")).toBeInTheDocument();
  });

  test("displays todo items", () => {
    render(<TodoListPage />);
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });
});

describe("TodoItem Basic Tests", () => {
  const mockTodo = {
    _id: uuidv4(),
    text: "Test Todo",
    completed: false,
    createdAt: new Date().toString(),
  };

  test("renders todo text", () => {
    render(<TodoItem todo={mockTodo} />);
    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  test("has checkbox", () => {
    render(<TodoItem todo={mockTodo} />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
});
