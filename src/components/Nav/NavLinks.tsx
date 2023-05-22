import "solid-js";
import { Match, Show, Switch, createSignal } from "solid-js";
import { AiOutlineClose, AiOutlineMenu } from "solid-icons/ai";
import { createMediaQuery } from "@solid-primitives/media";
import NavLinkMenu from "./NavLinkMenu";
import StyledNavLink from "./StyledNavLink";
import NavSearch from "./NavSearch";

function NavLinks({ pages }: { pages: any }) {
  const isMobile = createMediaQuery("(max-width: 1024px)");
  const [isOpen, setIsOpen] = createSignal(false);
  const toggle = () => setIsOpen(!isOpen());
  return (
    <>
      <Show
        when={isOpen()}
        fallback={
          <button onClick={toggle} class="lg:hidden">
            <AiOutlineMenu size={30} class="fill-secondary" />
          </button>
        }
      >
        <button onClick={toggle} class="lg:hidden">
          <AiOutlineClose size={30} class="fill-secondary" />
        </button>
      </Show>
      <ul
        class={`
            ${
              isMobile()
                ? isOpen()
                  ? "max-h-[1000px]"
                  : "max-h-0"
                : "max-h-max transition-none"
            }
            relative overflow-hidden lg:overflow-visible
            transition-[max-height] ease duration-500 delay-0 
            basis-full lg:basis-auto flex flex-col lg:flex-row items-center ml-auto
        `}
      >
        {pages.map((page: any) => (
          <StyledNavLink>
            <Switch>
              <Match when={!!page.options}>
                <NavLinkMenu page={page} />
              </Match>
              <Match when={!!page.url}>
                <a class="block px-5 py-4 " href={page.url}>
                  {page.title}
                </a>
              </Match>
            </Switch>
          </StyledNavLink>
        ))}
        <NavSearch />
      </ul>
    </>
  );
}

export default NavLinks;
