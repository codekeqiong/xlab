import React, { useEffect, useState } from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Button, Dropdown, Icon, Menu } from 'antd';
import style from './index.module.less';

export function AppHeader(props: { showMenu: boolean; show: (type: boolean) => void }) {
  const [state, setState] = useState({ collapsed: props.showMenu });

  useEffect(() => {}, []);

  const toggleCollapsed = () => {
    props.show(!state.collapsed);
    setState({
      collapsed: !state.collapsed,
    });
  };

  return (
    <div className={style.layoutBackground}>
      <div className={style.leftSide}>
        <span>X实验室</span>
        <Button className={style.collapsed} type="primary" size="small" onClick={toggleCollapsed}>
          {React.createElement(state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
      </div>
      <div className={style.rightSide}>
        <div className={style.userpannel}>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item>
                  <div>退出</div>
                </Menu.Item>
              </Menu>
            }
          >
            <a className={style.userProfile}>
              <span>
                <span className={style.userName}>june</span>
                <br />
              </span>
              &nbsp;
              <Icon type="caret-down" style={{color: '#1890ff'}}/>
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
