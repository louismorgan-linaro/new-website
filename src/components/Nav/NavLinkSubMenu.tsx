import { AiFillCaretRight } from "solid-icons/ai";
import "solid-js";
import { Show, createSignal } from "solid-js";

function NavLinkSubMenu({ page }: { page: any }) {
  const [isOpen, setIsOpen] = createSignal(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <div onMouseEnter={open} onMouseLeave={close} class="relative">
      <button class="flex gap-1 items-center relative px-6 ">
        {page.text}
        <AiFillCaretRight size={12} class="fill-secondary" />
      </button>

      <Show when={isOpen()}>
        <ul
          class="
                absolute bg-gray-50 z-10 min-w-full max-w-[16rem] w-max left-full top-[-0.5rem]
                border-2 border-gray-400 border-opacity-20
            "
        >
          {page.options.map((option: any) => (
            <li class="list-item px-6 py-2 hover:bg-linarogreen">
              <a class="" href={option.url}>
                {option.text}
              </a>
            </li>
          ))}
        </ul>
      </Show>
    </div>
  );
}

export default NavLinkSubMenu;
