import { RootRoute, Route, createRouter } from "@tanstack/react-router";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Create the root route
const rootRoute = new RootRoute({
  component: RootLayout,
});

// Create child routes
const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const productsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/products",
  component: Products,
});

const servicesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/services",
  component: Services,
});

const aboutRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: About,
});

const contactRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: Contact,
});

const notFoundRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "*",
  component: NotFound,
});

// Create the route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  productsRoute,
  servicesRoute,
  aboutRoute,
  contactRoute,
  notFoundRoute,
]);

// Create and export the router
export const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
