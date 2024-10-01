import React from "react";
import {
  LinksListProvider,
  ActiveAuthComponentProvider,
  ActiveProfileTabProvider,
  CartProvider,
  FilterProvider,
  ListBlogPostProvider,
  ListproductsProvider,
  SingleProductProvider,
} from "..";

const AppProviders = ({ children }) => {
  return (
    <>
      <CartProvider>
        <FilterProvider>
          <ActiveAuthComponentProvider>
            <ActiveProfileTabProvider>
              <ListBlogPostProvider>
                <ListproductsProvider>
                  <LinksListProvider>
                    <SingleProductProvider>{children}</SingleProductProvider>
                  </LinksListProvider>
                </ListproductsProvider>
              </ListBlogPostProvider>
            </ActiveProfileTabProvider>
          </ActiveAuthComponentProvider>
        </FilterProvider>
      </CartProvider>
    </>
  );
};

export default AppProviders;
