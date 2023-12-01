export const lexics = {
  price: 'Цена, руб',
  weight: 'Вес|Объем, г.|мл.',
  count: 'Количество, шт.',
  priceWeight: 'Цена за кг|л, руб.',
  priceCount: 'Цена за шт., руб.',
}

export enum KEYBOARD_KEYS {
  enter = 'Enter',
  escape = 'Escape',
}

export const DEFAULT_PRICE = 0
export const DEFAULT_WEIGHT = 0
export const DEFAULT_COUNT = 0

export const DEFAULT_STATE = {
  price: {
    countValue: 0,
    field: 'price',
    lexic: lexics.price,
  },
  weight: {
    countValue: 0,
    field: 'weight',
    lexic: lexics.weight,
  },
  volume: {
    countValue: 0,
    field: 'count',
    lexic: lexics.count,
  },
}

export const REGEX_DECIMAL = /^(?!0\d)\d*[.,]?\d*$/

export const REGEX_INTEGER = /^(?!0)\d*$/