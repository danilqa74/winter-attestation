import  {TasksFilterDto} from '../../api'

export type FilterItem = {
  id: TasksFilterDto;
  title: string;
}

export const filtersMap: Record<TasksFilterDto, FilterItem> = {
  [TasksFilterDto.All]: {
    id: TasksFilterDto.All,
    title: 'Все',
  },
  [TasksFilterDto.Opened]: {
    id: TasksFilterDto.Opened,
    title: 'Незаконченные',
  },
  [TasksFilterDto.Closed]: {
    id: TasksFilterDto.Closed,
    title: 'Законченные',
  },
};

export const filtersOrder = [TasksFilterDto.All, TasksFilterDto.Opened, TasksFilterDto.Closed]
