export interface StorybookPluginConfig {
  mainExt: 'cjs' | 'js';
  type: 'web-components' | 'preact';
  configDir?: string;
}
