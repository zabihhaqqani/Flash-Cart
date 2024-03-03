import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react"
import ProductReducer from "../reducer/ProductReducer"

import { useNavigate } from "react-router-dom"
import axios from "axios"
import { getCartItems } from "../utils/getCartItems"
import { getWishListItems } from "../utils/getWishlistItems"
import { useAuthContext } from "./AuthContext"

export const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
  const guestUserAddress = [
    {
      id: 1,
      userName: "Zabih",
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
      pincode: 300050,
      mobileNumber: 9890990123,
    },
  ]

  const initalState = {
    isLoading: false,
    isError: false,
    products: [],
    singleProduct: [],
    categoriesData: [],
    wishListData: [],
    cartData: [],
    iconName: "fa-regular fa-heart",
    addressData: guestUserAddress,
  }

  const [showLoader, setShowLoader] = useState(false)

  const encodedToken = localStorage.getItem("token")

  const { isUserLoggedIn } = useAuthContext()

  const navigate = useNavigate()

  const [state, dispatch] = useReducer(ProductReducer, initalState)

  const getProductsData = async () => {
    dispatch({ type: "SET_LOADING" })
    try {
      const { data, status } = await axios.get("/api/products")
      if (status === 200) {
        dispatch({ type: "API_DATA", payload: data?.products })
      }
    } catch (err) {
      dispatch({ type: "API_ERROR" })
    } finally {
    }
  }

  const getCategoriesData = async () => {
    try {
      const { status, data } = await axios.get("/api/categories")
      if (status === 200) {
        dispatch({
          type: "SET_CATEGORIES",
          payload: data?.categories,
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  const getSingleProduct = async (productId) => {
    try {
      const { status, data } = await axios.get(`/api/products/${productId}`)
      if (status === 200) {
        dispatch({ type: "SHOW_SINGLE_PRODUCT", payload: data?.product })
        navigate(`/product/${productId}`)
      }
    } catch (error) {
      console.error(error)
    }
  }

  const showSingleProduct = (product) => {}

  const setProducts = async () => {
    try {
      const cart = await getCartItems(encodedToken)
      const wishlist = await getWishListItems(encodedToken)
      if (cart?.status === 200) {
        dispatch({
          type: "SET_CART_PRODUCTS",
          payload: cart?.data?.cart,
        })
      }
      if (wishlist?.status === 200) {
        dispatch({
          type: "SET_WISHLIST_PRODUCTS",
          payload: wishlist?.data?.wishlist,
        })
      }
    } catch (error) {
      console.error(error)
    }
  }

  const clearItems = () => {
    dispatch({ type: "SET_CART_PRODUCTS", payload: [] })
    dispatch({ type: "SET_WISHLIST_PRODUCTS", payload: [] })
  }

  useEffect(() => {
    getProductsData()
    isUserLoggedIn && setProducts()
    !isUserLoggedIn && clearItems()
    getCategoriesData()
    setShowLoader(true)
    setTimeout(() => {
      setShowLoader(false)
    }, 5 * 100)
  }, [dispatch, isUserLoggedIn])

  const discount = state?.cartData?.reduce((acc, curr) => acc * curr.qty, 30)

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        showSingleProduct,
        dispatch,
        getSingleProduct,
        guestUserAddress,
        discount,
        showLoader,
        setShowLoader,
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

const useProductContext = () => {
  return useContext(ProductsContext)
}

export { useProductContext }
