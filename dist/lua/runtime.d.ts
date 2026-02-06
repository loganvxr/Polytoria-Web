export declare class LuaRuntime {
    private luaModule;
    private runLuaString?;
    init(): Promise<void>;
    run(luaCode: string): void;
    runAndLog(luaCode: string): void;
}
