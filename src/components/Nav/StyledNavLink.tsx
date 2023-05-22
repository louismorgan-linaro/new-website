import "solid-js";
import type { ParentComponent } from "solid-js";

const StyledNavLink: ParentComponent = ({ children }) => {
  return (
    <li
      class="
      text-secondary relative cursor-pointer
      after:content-[''] after:absolute after:w-full after:scale-x-0 after:bg-linarogreen after:bottom-0 after:inset-x-0
      after:transition-[transform] hover:after:scale-x-100 after:h-1 after:pointer-events-none
  "
    >
      {children}
    </li>
  );
};

export default StyledNavLink;
