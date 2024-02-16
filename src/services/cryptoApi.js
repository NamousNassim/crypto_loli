import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
  'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST
}

const baseURL = process.env.REACT_APP_CRYPTO_API_URL 

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => createRequest(`/coins?limit=${count}`),
    }),

    getCryptoDetails: builder.query({
      query: (uuid) => createRequest(`/coin/${uuid}`),
    }),

    getCryptoHistory: builder.query({
      query: ({uuid , timeperoid}) => createRequest(`/coin/${uuid}/history/${timeperoid}`),
    }),
  }),
});

export const {
  useGetCryptosQuery, useGetCryptoDetailsQuery , useGetCryptoHistoryQuery
} = cryptoApi;