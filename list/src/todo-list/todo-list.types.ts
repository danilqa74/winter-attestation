type Todo = {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
  timestamp: string;
}

export type Props = {
  isLoading: boolean;
  todos: Todo[],
  itemActions: (item: Todo) => React.ReactNode[]
}
