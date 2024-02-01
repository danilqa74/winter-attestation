import React from 'react';
import {Provider} from 'react-redux';
import {Layout, Row, Typography} from 'antd';
import {store} from './store'
import {FilteredTasksList} from "@src/features/filtered-tasks-list"
import "./styles/index.scss"
import "./app.css";


export const App = () => {
  return (
    <Provider store={store}>
      <Layout className="root">
        <Layout className="toolbar">
          <Row justify="center">
            <Typography.Title>Список задач</Typography.Title>
          </Row>
        </Layout>
        <Layout.Content className="content">
          <FilteredTasksList />
        </Layout.Content>
      </Layout>
    </Provider>
  );
}

