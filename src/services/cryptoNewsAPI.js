
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
     'X-RapidAPI-Host': process.env.REACT_APP_NEWS_RAPIDAPI_HOST
}  

const baseUrl = process.env.REACT_APP_NEWS_API_URL
const createRequest = (url) => ({ url, headers: cryptoNewsApiHeaders });

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: (builder) => ({
      getCryptoNews: builder.query({
        query: (count) => createRequest(`/?limit=${count}`),
      }),
    }),
  });


  export const  {useGetCryptoNewsQuery , useGetCryptoDetailsQuery } = cryptoNewsApi;
