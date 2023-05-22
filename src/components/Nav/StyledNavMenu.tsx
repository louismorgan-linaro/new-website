import type { ParentComponent } from "solid-js";

const StyledNavMenu: ParentComponent<{}> = (props) => {
  return (
    <ul
      class="
            lg:absolute bg-gray-50 z-10 min-w-full max-w-[20rem] w-max left-0 h-auto
            border-2 border-gray-400 border-opacity-20
        "
    >
      {props.children}
    </ul>
  );
};

export default StyledNavMenu;
