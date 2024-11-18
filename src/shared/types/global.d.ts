declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

interface ImportMetaEnv {
  VITE_URL_SERVER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
