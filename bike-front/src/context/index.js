import {
  createContext,
  useEffect,
  useMemo,
  useState,
  useCallback,
} from "react";

import { fetchData } from "../services/apiService";

export const AuthContent = createContext(null);
export const ListproductsContext = createContext();
export const LinksListContext = createContext();
export const ListBlogPostContext = createContext();
export const SingleProductContext = createContext();
export const ActiveProfileTabContext = createContext([]);
export const ActiveAuthComponentContext = createContext([]);
export const FilterContext = createContext([]);
export const CartContext = createContext([{}, () => {}]);

export const ListproductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchData("products").then((prods) => prods && prods.length && setProducts(prods));
  }, []);
  const memoizedProducts = useMemo(() => products, [products]);
  return (
    <ListproductsContext.Provider value={[memoizedProducts, setProducts]}>
      {children}
    </ListproductsContext.Provider>
  );
};

export const LinksListProvider = ({ children }) => {
  const [links, setLinks] = useState([]);
  console.log(links)
  useEffect(() => {
    fetchData("links").then((linksData) => {
      if (linksData && linksData.data && linksData.data.header) {
        setLinks(linksData.data.header.headerMenuItems);
      }
    });
  }, []);
  const memoizedLinks = useMemo(() => links, [links]);
    console.log(memoizedLinks)

  return (
    <LinksListContext.Provider value={[memoizedLinks, setLinks]}>
      {children}
    </LinksListContext.Provider>
  );
};

export const ListBlogPostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData("posts").then((postList) => postList && postList.length && setPosts(postList));
  }, []);
  const memoizedProducts = useMemo(() => posts, [posts]);
  return (
    <ListBlogPostContext.Provider value={[memoizedProducts, setPosts]}>
      {children}
    </ListBlogPostContext.Provider>
  );
};

export const SingleProductProvider = ({ children }) => {
  const [singleProduct, setSingleProduct] = useState({});
  return (
    <SingleProductContext.Provider value={[singleProduct, setSingleProduct]}>
      {children}
    </SingleProductContext.Provider>
  );
};

// active tab in profile page sidebar
export const ActiveProfileTabProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState("history");
  return (
    <ActiveProfileTabContext.Provider value={[activeTab, setActiveTab]}>
      {children}
    </ActiveProfileTabContext.Provider>
  );
};

export const ActiveAuthComponentProvider = ({ children }) => {
  const [activeAuthComponent, setActiveAuthComponent] = useState("login");
  return (
    <ActiveAuthComponentContext.Provider
      value={[activeAuthComponent, setActiveAuthComponent]}
    >
      {children}
    </ActiveAuthComponentContext.Provider>
  );
};

export const FilterProvider = ({ children }) => {
  const [filterValues, setFilterValues] = useState({
    "Only in stock": false,
    "Bicycles Types": [],
    Brand: [],
    Price: [],
    Country: [],
    Year: [],
  });

  const updateFilter = useCallback((filterName, value) => {
    setFilterValues((prevValues) => ({
      ...prevValues,
      [filterName]: value, // No need for .map, directly set the value
    }));
  }, []);

  const defaultFilterValues = useMemo(
    () => ({
      "Only in stock": false,
      "Bicycles Types": [],
      Brand: [],
      Price: [],
      Country: [],
      Year: [],
    }),
    []
  );

  return (
    <FilterContext.Provider
      value={{
        filterValues,
        updateFilter, // Memoized function
        defaultFilterValues,
        setFilterValues,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// cart

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    let cartData = localStorage.getItem("woo-react-cart");
    cartData = cartData ? JSON.parse(cartData) : "";
    setCart(cartData);
  }, []);

  return (
    <CartContext.Provider value={[cart, setCart]}>
      {children}
    </CartContext.Provider>
  );
};
