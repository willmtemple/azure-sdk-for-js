type Plugin = import("rollup").Plugin;

declare module "rollup-plugin-sourcemaps" {
  export default function(): Plugin;
}

declare module "rollup-plugin-node-globals" {
  export default function(): Plugin;
}

declare module "rollup-plugin-node-builtins" {
  export default function(): Plugin;
}

declare module "@rollup/plugin-multi-entry" {
  interface MultiEntryOptions {
    exports: boolean;
  }
  export default function(opts: MultiEntryOptions): Plugin;
}
