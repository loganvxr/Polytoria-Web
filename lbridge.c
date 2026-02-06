#include "lua/lua.h"
#include "lua/lauxlib.h"
#include "lua/lualib.h"
#include <emscripten.h>

lua_State* L = NULL;

EMSCRIPTEN_KEEPALIVE
void init_lua() {
    if (L) return;
    L = luaL_newstate();
    luaL_openlibs(L);
}

EMSCRIPTEN_KEEPALIVE
int run_lua_string(const char* code) {
    if (!L) init_lua();
    return luaL_dostring(L, code);
}
