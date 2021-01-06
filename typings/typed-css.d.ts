// 这里需要声明一下模块的后缀名，否则的话引用module.less会报错: Cannot find module './index.module.scss' or its corresponding type declarations.ts
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
