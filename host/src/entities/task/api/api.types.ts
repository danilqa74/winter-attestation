
export enum TasksFilterDto {
  All = 'All',
  Opened = 'Opened',
  Closed = 'Closed',
}

export type TaskDto = {
  id: number;
  title: string;
  completed: boolean;
  timestamp: string;
}
