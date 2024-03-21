

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.DdgnxM9R.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.MVm55adg.js","_app/immutable/chunks/entry.CpCDiHs5.js"];
export const stylesheets = [];
export const fonts = [];
