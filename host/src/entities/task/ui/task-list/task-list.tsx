import {lazy} from "react";
import {useSelector} from "react-redux";
import {useGetTasksQuery} from '../../api'
import {Props} from "./task-list.props"

const TodoList = lazy(() => import("list/TodoList"));
export const TaskList = (props: Props) => {
  const filter = useSelector((state: AppState) => {
    return state["tasks-filter"]
  });

  const {isFetching, data} = useGetTasksQuery(filter);
  return (
    <TodoList todos={data} isLoading={isFetching} itemActions={props.itemActions} />
  )
}
