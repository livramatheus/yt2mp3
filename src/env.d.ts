/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BAKCEND_URL: string
}
  
interface ImportMeta {
  readonly env: ImportMetaEnv
}
  