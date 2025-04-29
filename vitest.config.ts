import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		workspace: [
			"{apps,packages}/*/vitest.config.ts",
			{
				test: {
					include: ["**/*.{browser}.test.{ts,js}"],
					name: "happy-dom",
					environment: "happy-dom",
				},
			},
			{
				test: {
					include: ["**/*.{node}.test.{ts,js}"],
					name: "node",
					environment: "node",
				},
			},
		],
	},
});
