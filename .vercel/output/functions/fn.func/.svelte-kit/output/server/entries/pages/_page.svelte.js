import { c as create_ssr_component } from "../../chunks/ssr.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-an5wr4_START -->${$$result.title = `<title>Jayden Alchin</title>`, ""}<!-- HEAD_svelte-an5wr4_END -->`, ""} <section class="bg-primary flex w-screen h-screen justify-center items-center" data-svelte-h="svelte-fi7rbv"><header class="text-white flex flex-col justify-center items-center text-center p-4"><h1 class="leading-tight">Jayden Alchin</h1> <p class="text-opacity-90 text-3xl max-md:text-xl self-center mt-4">UI/UX Designer, Digital Artist, Coffee Addict</p> <div class="text-white text-3xl max-md:text-xl font-bold whitespace-nowrap mt-24 px-24 py-8 max-md:px-8 max-md:py-4 rounded-2xl max-md:rounded-lg border-4 border-white">In Development</div></header></section>`;
});
export {
  Page as default
};
