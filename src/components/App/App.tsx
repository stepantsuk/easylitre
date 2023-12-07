import { useCalc } from './hooks/useCalc'
import { AppHeader } from '../AppHeader'
import { ProductsList } from '../ProductsList'
import { Calculator } from '../Calculator'
import {
  AppWrapper,
  ContentWrapper,
} from './styled'

// export type TProductItem = {
//   count: number,
//   name: string,
//   price: number,
//   weight: number,
//   id: number,
// }

export const App = () => {
  const {
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
  } = useCalc()

  return (
    <AppWrapper>
      <AppHeader />
      <ContentWrapper>
        <Calculator
          count={count}
          onCleanCount={cleanCount}
          onSaveProduct={handleSaveProduct}
          onSetPrice={handleSetPrice}
          onSetWeight={handleSetWeight}
          onSetCount={handleSetCount}
          onSetProductName={handleSetProductName}
          price={price}
          productName={productName}
          weight={weight}
        />
        <ProductsList
          products={products}
          onDeleteProduct={handleDeleteProduct}
          onCleanList={handleCleanList}
          onSaveEdit={handleSaveEdit}
        />
      </ContentWrapper>
    </AppWrapper>
  );
}

