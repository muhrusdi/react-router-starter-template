import type { Config } from "@react-router/dev/config";

export default {
  future: {
    unstable_viteEnvironmentApi: true,
  },
  async prerender() {
    return ["/"];
  },
} satisfies Config;
