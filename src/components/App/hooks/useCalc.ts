import { useState } from 'react'

import {
  DEFAULT_COUNT,
  DEFAULT_PRICE,
  DEFAULT_WEIGHT,
  DEFAULT_PRODUCT_TITLE,
} from '../../../config'
import {
  removeLocalStorage,
  setLocalStorage
} from '../../../helpers/localStorage'

import { getInitialProducts } from '../helpers/getInitialProducts'

export type TProductItem = {
  count: number,
  name: string,
  price: number,
  weight: number,
  id: number,
}

export const useCalc = () => {
  const [products, setProducts] = useState<Array<TProductItem>>(getInitialProducts())

  const [price, setPrice] = useState<number>(DEFAULT_PRICE)
  const [weight, setWeight] = useState<number>(DEFAULT_WEIGHT)
  const [count, setCount] = useState<number>(DEFAULT_COUNT)
  const [productName, setProductName] = useState<string>(DEFAULT_PRODUCT_TITLE)

  const handleSetPrice = (str: string) => setPrice(parseFloat(str))
  const handleSetWeight = (str: string) => setWeight(parseFloat(str))
  const handleSetCount = (str: string) => setCount(parseFloat(str))
  const handleSetProductName = (str: string) => setProductName(str)

  const cleanCount = () => {
    setPrice(DEFAULT_PRICE)
    setWeight(DEFAULT_WEIGHT)
    setCount(DEFAULT_COUNT)
    setProductName(DEFAULT_PRODUCT_TITLE)
  }

  const handleCleanList = () => {
    removeLocalStorage('products')
    setProducts([])
  }

  const handleSaveProduct = () => {
    const product: TProductItem = {
      count: count,
      id: Date.now(),
      name: productName ? productName : 'Без названия',
      price: price,
      weight: weight,
    }
    const productsToState = [...products, product]
    setProducts(productsToState)
    setLocalStorage('products', JSON.stringify(productsToState))
    cleanCount()
  }

  const handleSaveEdit = (product: TProductItem) => {
    const { id: idProductToChange } = product
    const productToChangeIndex = products.findIndex(({ id }) => id === idProductToChange)
    const productsToState = [...products]
    productsToState[productToChangeIndex] = product
    setProducts(productsToState)
    setLocalStorage('products', JSON.stringify(productsToState))
  }

  const handleDeleteProduct = (idProduct: number) => {
    const filtredProducts = products.filter(({ id }) => idProduct !== id)
    setLocalStorage('products', JSON.stringify(filtredProducts))
    setProducts(filtredProducts)
  }

  return {
    cleanCount,
    count,
    handleSetPrice,
    handleSetWeight,
    handleSetCount,
    handleSetProductName,
    handleCleanList,
    handleSaveProduct,
    handleSaveEdit,
    handleDeleteProduct,
    price,
    products,
    productName,
    weight,
  }
}