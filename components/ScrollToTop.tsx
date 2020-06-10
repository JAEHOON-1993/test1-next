import * as React from "react";
import { withRouter, SingletonRouter } from "next/router";

type Props = {
  router: SingletonRouter;
  children?: any;
};

const ScrollToTop: React.FC<Props> = (props) => {
  const prevRouterRef = React.useRef<any>();
  React.useEffect(() => {
    if (props.router.pathname !== prevRouterRef.current) {
      window.scrollTo(0, 0);
    }
    prevRouterRef.current = props.router.pathname;
  });
  return props.children;
};

export default withRouter(ScrollToTop);
