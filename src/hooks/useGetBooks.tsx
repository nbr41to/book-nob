import { axiosGetFetcher } from '@/lib/axios/axiosGetFetcher';
import useSWR from 'swr';

export const useGetBooks = () => useSWR('/api/books', axiosGetFetcher);
