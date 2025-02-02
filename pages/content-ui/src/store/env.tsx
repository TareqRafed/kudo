import { create } from 'zustand';

type Env = 'extension' | 'injected' | null;

type EnvStore = {
  environment: Env;
  setEnvironment: (env: Env) => void;
};

const useEnvStore = create<EnvStore>(set => ({
  environment: null,

  /**
   * Disables sets all other item `inUse` to false
   */
  setEnvironment: env =>
    set(state => {
      state.environment = env;
      return state;
    }),
}));

export default useEnvStore;
