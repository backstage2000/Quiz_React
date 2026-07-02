import type { JSX } from "react";
import { Toaster as Component } from "sonner";

const Toaster = (): JSX.Element => {
  return <Component position="bottom-right" theme="light" richColors />;
};

export default Toaster;
