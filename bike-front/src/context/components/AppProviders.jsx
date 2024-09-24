import React from "react";
import {
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
                  <SingleProductProvider>{children}</SingleProductProvider>
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
