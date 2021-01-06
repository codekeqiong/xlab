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
    <div className="site-layout-background" style={{ padding: 0 }}>
      <div className={style.leftSide}>X实验室</div>
      <div className={style.leftSide} style={{ marginRight: 'auto', marginLeft: 10 }}>
        <Button type="primary" onClick={toggleCollapsed}>
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
              <Icon type="caret-down" />
            </a>
          </Dropdown>
        </div>
      </div>
    </div>
  );
}
