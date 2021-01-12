import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import styles from './index.module.less';
import { AppHeader } from '@/layout/layout-header';
import { AppMenu } from '@/layout/layout-menu';
import { Empty } from 'antd';
import { AllRouter } from '@/router';
// import { store } from '@/store';
interface IProps {
  children: React.ReactNode;
}

export function AppPage({ children }: IProps) {
  const history = useHistory();
  const pathname = history.location.pathname;
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (pathname === '/skinModules') {
      setShowMenu(true);
      // store.layout.setShowMenu(true);
    }
  }, [pathname]);

  const allow = AllRouter.filter(x => {
    let str = x.path.match(/.*(?=:)/)?.[0];
    return (x.path === pathname && x.path) || (str && pathname.match(new RegExp(str))?.[0]);
  });

  if (allow.length === 0) {
    return (
      <div className={styles.empty}>
        <Empty description={<span>页面不存在</span>}></Empty>
      </div>
    );
  }

  /** 是否显示完整的menu */
  const show = (type: boolean) => {
    // console.log(type);
    setShowMenu(type);
    // store.layout.setShowMenu(type);
  };

  return (
    <div className={styles.container}>
      <AppHeader show={show} showMenu={showMenu} />
      <div className={styles.wrap}>
        <div className={styles.menu} style={{ width: showMenu ? '' : 240, display: showMenu ? 'none' : 'block' }}>
          <AppMenu />
        </div>
        <div className={styles.contentWrap} style={{ background: pathname === '/skinModules' ? '#ffffff' : '', padding: showMenu ? '0' : '' }} id="page-contentWrap">
          <div
            style={{ background: showMenu ? '#fff' : '', padding: showMenu && pathname === '/skinModules' ? '0' : '', minWidth: showMenu ? '' : 1200 }}
            className={styles.content}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
