import type { PaperclipPluginManifestV1 } from "@paperclipai/plugin-sdk";

const manifest: PaperclipPluginManifestV1 = {
  id: "paperclipai-github-plugin",
  apiVersion: 1,
  version: "0.1.0",
  displayName: "GitHub Integration",
  description: "A Paperclip plugin for GitHub integration",
  author: "",
  categories: ["connector"],
  capabilities: ["events.subscribe", "plugin.state.read", "plugin.state.write"],
  entrypoints: {
    worker: "./dist/worker.js",
    ui: "./dist/ui",
  },
  ui: {
    slots: [
      {
        type: "dashboardWidget",
        id: "health-widget",
        displayName: "GitHub Integration Health",
        exportName: "DashboardWidget",
      },
    ],
  },
};

export default manifest;
