import React, { useEffect, useState } from 'react';
import { Icon, Menu, message } from 'antd';
import styles from './index.module.less';
import { IAppMenuItem } from '../../router/common';
import { withRouter, RouteChildrenProps } from 'react-router';
import services from '@/services';

const SubMenu = Menu.SubMenu;

export const AppMenu = withRouter(function (props: RouteChildrenProps) {
  const [state, setstate] = useState<IAppMenuItem[]>([]);
  useEffect(() => {
    services.common.getMenu().then((data: React.SetStateAction<IAppMenuItem[]>) => {
      setstate(data);
    });
  }, []);

  const goMenuUrl = (url: string) => {
    if (url === '/robot') {
      window.location.href = `http://waituntil.online:8080/userGroup?authInfo=${localStorage.getItem('userData')}`;
    } else {
      props.history.push(url);
    }
  };

  const renderMenu = () => {
    {console.log('菜单数据data', state)}
    return state.map((menuItem, index) => {
      if (!menuItem.isShow) return;
      const hasChlildren = menuItem.children?.length && menuItem.children?.length > 0;
      if (!hasChlildren && !menuItem.url) {
        return message.error('菜单配置错误，没有子项的顶级菜单栏必须要有url');
      }

      if (!hasChlildren) {
        return (
          <Menu.Item key={index} onClick={() => goMenuUrl(menuItem.url!)}>
            <Icon type={menuItem.icon} />
            <span>{menuItem.name}</span>
          </Menu.Item>
        );
      }

      return (
        <SubMenu key={index} popupClassName={styles.subMenuItem} title={<span><Icon type={menuItem.icon} /><span>{menuItem.name}</span></span>}>
          {menuItem.children?.map((item) => {
            return (<Menu.Item className={styles.subMenuItem} onClick={() => { goMenuUrl(item.url) }} key={item.url}>{item.name}</Menu.Item>);
          })}
        </SubMenu>
      );
    });
  };

  if (!state.length) return null;
  const openKeys: any = state.map((x, i) => {
      if (x.children?.filter(x => x.url === props.location.pathname).length) return `${i}`;
      return x.isOpen && `${i}`;
    }).filter(x => x);

  return (
    <div className={styles.container}>
      {/* defaultSelectedKeys	 初始选中的菜单项key数组 
          defaultOpenKeys	 初始展开的SubMenu菜单项key数组*/}
      <Menu defaultOpenKeys={openKeys} defaultSelectedKeys={[props.location.pathname]} mode="inline">
        {renderMenu()}
      </Menu>
    </div>
  );
});
