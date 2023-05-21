import { axiosGetFetcher } from '@/lib/axios/axiosGetFetcher';
import useSWR from 'swr';

export const useGetAuthors = () => useSWR('/api/authors', axiosGetFetcher);
