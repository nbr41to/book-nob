import { useGetAuthors } from '@/hooks/useGetAuthors';

export default function Authors() {
  const { data } = useGetAuthors();
  console.log(data);

  return (
    <div>
      <h1>著者一覧</h1>
    </div>
  );
}
