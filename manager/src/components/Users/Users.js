import React from 'react';
import { connect } from 'dva';
import { Table, Pagination, Popconfirm } from 'antd';
import { routerRedux } from 'dva/router';
import styles from './Users.css';
import { PAGE_SIZE } from '../../constants';

const Users = ({ dispatch, list: dataSource, loading, total, page: current }) => {
  const deleteHandler = (id) => {
    dispatch({
      type: 'users/remove',
      payload: id,
    });
  }
  const pageChangeHandler = (page) => {
    console.log(page);
    dispatch(routerRedux.push({
      pathname: '/users',
      query: { page }
    }));
  }
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="">{text}</a>,
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Website',
      dataIndex: 'website',
      key: 'website',
    },
    {
      title: 'Operation',
      key: 'operation',
      render: (text, { id }) => (
        <span className={styles.operation}>
          <a href="">Edit</a>
          <Popconfirm title="确定删除?" onConfirm={deleteHandler.bind(null, id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
      ),
    },
  ];
  return (
    <div className={styles.normal}>
      <div>
        <Table
          columns={columns}
          dataSource={dataSource}
          rowKey={record => record.id}
          pagination={false}
          loading={loading}
        />
        <Pagination
          className="ant-table-pagination"
          total={total}
          current={current}
          pageSize={PAGE_SIZE}
          onChange={pageChangeHandler}
        />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  const { list, total, page } = state.users;
  return {
    loading: state.loading.models.users,
    list,
    total,
    page,
  };
}
export default connect(mapStateToProps)(Users);
