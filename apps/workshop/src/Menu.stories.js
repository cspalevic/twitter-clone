import {
  Fragment as _Fragment,
  jsx as _jsx,
  jsxs as _jsxs,
} from "react/jsx-runtime";
import { Menu, MenuItem } from "ui";

export const SampleMenu = () =>
  _jsx(
    Menu,
    Object.assign(
      { title: "Choose audience" },
      {
        children: _jsxs(_Fragment, {
          children: [
            _jsx(
              MenuItem,
              Object.assign(
                { onClick: () => alert("Everyone selected!") },
                { children: _jsx("p", { children: "Everyone" }) }
              )
            ),
            _jsx(
              MenuItem,
              Object.assign(
                { onClick: () => alert("Twitter Circle selected!") },
                { children: _jsx("p", { children: "Twitter Circle" }) }
              )
            ),
          ],
        }),
      }
    )
  );
export default {
  title: "Menu",
  component: Menu,
};
