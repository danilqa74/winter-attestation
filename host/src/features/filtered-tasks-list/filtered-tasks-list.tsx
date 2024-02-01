import React, {useEffect} from "react";
import {Row, Checkbox} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {TaskList, TasksFilter, useLazyGetTasksQuery, changeFilter, useToggleStatusMutation} from "@src/entities/task";


export const FilteredTasksList = () => {
  const filter = useSelector((state: AppState) => {
    return state["tasks-filter"]
  });
  const dispatch = useDispatch();
  const [fetchTodos, {isFetching}] = useLazyGetTasksQuery();
  const [updateStatus, result] = useToggleStatusMutation();
  useEffect(() => {
    fetchTodos(filter)
  }, [filter]);


  return (
    <>
      <Row justify="center">
        <TasksFilter defaultSelectedFilter={filter} onChange={(filter) => dispatch(changeFilter(filter))} disabled={isFetching}/>
      </Row>
      <Row gutter={[0, 20]} justify="center">
        <TaskList itemActions={(item) => [<Checkbox checked={item.completed} onChange={() => updateStatus(item.id)} />]} />
      </Row>
    </>
  )
}
