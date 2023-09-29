import { CARS_URL } from '../constants'
import { apiSlice } from './apiSlice'

export const carsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCars: builder.query({
      query: () => ({
        url: CARS_URL
      }),
      keepUnusedDataFor: 5
    }),
    getCarDetails: builder.query({
      query: (carId) => ({
        url: `${CARS_URL}/${carId}`
      })
    }),
    keepUnusedDataFor: 5,
  })
})

export const { useGetCarsQuery, useGetCarDetailsQuery } = carsApiSlice
