import { HexclaveClientApp } from "@hexclave/next";

export const hexclaveClientApp = new HexclaveClientApp({
  projectId: process.env.HEXCLAVE_PROJECT_ID || process.env.NEXT_PUBLIC_HEXCLAVE_PROJECT_ID || "a50a53fe-de9a-4989-abff-41f3f23a96f6",
  tokenStore: "nextjs-cookie",
  urls: {
    default: {
      type: "hosted",
    },
  },
});
