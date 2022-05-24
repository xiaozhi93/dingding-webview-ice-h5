declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare const dd: any;

interface window {
  dd: any;
}
