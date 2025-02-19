## biome config

You have a base configuration called @base, which is independent of the environment and only contains language-specific rules. All other configurations must inherit from it.
Additional configurations are environment-specific, such as `react`, `node`, or `nextjs`.

* No other configuration should inherit from env config. if you want to do so, then just do it in the `package` or `app`
