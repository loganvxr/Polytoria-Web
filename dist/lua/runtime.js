export class LuaRuntime {
    async init() {
        // @ts-ignore
        const luaModuleImport = await import('./wasm/lua.js');
        const luaModule = await luaModuleImport.default({
            noInitialRun: true,
            print: (text) => console.log("[Lua]", text),
            printErr: (text) => console.error("[Lua-Err]", text),
        });
        this.luaModule = luaModule;
        console.log("LuaRuntime - Lua VM initialized");
        this.luaModule._init_lua();
        this.runLuaString = this.luaModule.cwrap("run_lua_string", "number", ["string"]);
    }
    run(luaCode) {
        if (!this.luaModule)
            throw new Error("LuaRuntime - Lua VM not initialized");
        if (!this.runLuaString)
            throw new Error("LuaRuntime - Lua runner not initialized");
        const status = this.runLuaString(luaCode);
        if (status !== 0) {
            console.error("LuaRuntime - Lua error code", status);
        }
    }
    runAndLog(luaCode) {
        this.run(luaCode);
    }
}
