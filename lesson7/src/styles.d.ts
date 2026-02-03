// Allow importing CSS/SCSS/LESS files in TypeScript imports
// Covers both plain global styles and CSS modules.
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.css';
declare module '*.scss';
declare module '*.sass';
declare module '*.less';
