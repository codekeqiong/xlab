/**
 * @Description: 路由按需加载
 */

import React from 'react';

export default function lazyLoad(componentfn: () => PromiseLike<{ default: any }> | { default: any }) {
  class LazyloadComponent extends React.Component {
    state: any;
    constructor(props: Readonly<{}>) {
      super(props);
      this.state = {
        component: null,
      };
    }
    async componentDidMount() {
      const { default: component } = await componentfn();
      this.setState({ component });
    }
    render() {
      const C = this.state.component;
      return C ? <C {...this.props} /> : null;
    }
  }
  return LazyloadComponent;
}
