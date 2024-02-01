import  {TasksFilterDto} from '../../api'

export type FilterItem = {
  id: TasksFilterDto;
  title: string;
}

export type Props = {
  defaultSelectedFilter: TasksFilterDto,
  onChange: (filter: TasksFilterDto) => void;
  disabled: boolean;
}
