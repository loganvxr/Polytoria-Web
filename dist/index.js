// @ts-ignore
import { LuaRuntime } from "./lua/runtime.js";
(async () => {
    const lua = new LuaRuntime();
    await lua.init();
    lua.runAndLog('print("Hello from Lua!")');
})();
