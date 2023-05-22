import { createSignal, type Component, Show } from "solid-js";
import StyledNavLink from "./StyledNavLink";
import { AiFillCaretDown, AiOutlineSearch } from "solid-icons/ai";
import StyledNavMenu from "./StyledNavMenu";

const NavSearch: Component<{}> = (props) => {
  const [isOpen, setIsOpen] = createSignal(false);
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  return (
    <StyledNavLink>
      <div onMouseEnter={open} onMouseLeave={close} class="relative ">
        <button class="flex gap-1 items-center px-5 py-4 mx-auto">
          <AiOutlineSearch size={20} class="fill-secondary" />
          <AiFillCaretDown size={12} class="fill-secondary" />
        </button>
        <Show when={isOpen()}>
          <div
            class="lg:absolute z-10 min-w-full max-w-[20rem] w-max right-0 
                border-2 border-gray-400 border-opacity-20"
          >
            <form>
              <input class="py-1 px-3" placeholder="Search..." name="query" />
              <button class="py-1 px-3 text-linarogreen" type="submit">
                Search
              </button>
            </form>
          </div>
        </Show>
      </div>
    </StyledNavLink>
  );
};

export default NavSearch;
