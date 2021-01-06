/*
 * @Date: 2020-03-24 10:23:48
 * @LastEditTime: 2020-11-10 11:54:35
 * @Description: 菜单
 */
export const common = {
  getMenu(): Promise<IAppMenuItem[]> {
    return Promise.resolve([
      {
        name: '数据总览',
        icon: 'setting',
        isOpen: false,
        isShow: false,
        children: [
          {
            name: '总览子菜单',
            url: '/',
          }
        ],
      },
      {
        name: '用户权限',
        icon: 'setting',
        isOpen: false,
        isShow: false,
        children: [
          {
            name: '视图权限',
            url: '/userAuth',
          }
        ],
      }
    ]);
  },
};

export interface IAppMenuItem {
  isShow?: any;
  name: string;
  url?: string;
  icon: string;
  isOpen?: boolean;
  children?: IAppSubMenuItem[];
}

export interface IAppSubMenuItem {
  name: string;
  url: string;
  isOpen?: boolean;
}