import {FC} from 'react';
import {List} from 'antd'
import {Props} from './todo-list.types'
import './todo-list.css';

export const TodoList: FC<Props> = ({isLoading = false, todos = [], itemActions }) => {
  return (
    <List
      className="todo-list"
      dataSource={todos}
      loading={isLoading}
      bordered
      renderItem={(item) => (
        <List.Item actions={itemActions(item)}>
          {item.title}
        </List.Item>
      )}
    />

  )
}
