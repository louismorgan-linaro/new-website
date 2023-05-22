import { AiFillCaretDown } from "solid-icons/ai";
import "solid-js";
import { Match, Show, Switch, createSignal } from "solid-js";
import NavLinkSubMenu from "./NavLinkSubMenu";
import StyledNavMenu from "./StyledNavMenu";

function NavLinkMenu({ page }: { page: any }) {
  const [isOpen, setIsOpen] = createSignal(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <div onMouseEnter={open} onMouseLeave={close} class="relative ">
      <button class="flex gap-1 items-center relative px-5 py-4 mx-auto">
        {page.title}
        <AiFillCaretDown size={12} class="fill-secondary" />
      </button>

      <Show when={isOpen()}>
        <StyledNavMenu>
          {page.options.map((option: any) => (
            <li class="py-2 hover:bg-linarogreen">
              <Switch>
                <Match when={!!option.options}>
                  <NavLinkSubMenu page={option} />
                </Match>
                <Match when={!!option.url}>
                  <a class="px-6 " href={option.url}>
                    {option.text}
                  </a>
                </Match>
              </Switch>
            </li>
          ))}
        </StyledNavMenu>
      </Show>
    </div>
  );
}

export default NavLinkMenu;
