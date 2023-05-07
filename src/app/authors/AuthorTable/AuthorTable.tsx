import { DeleteButton } from '@/app/authors/AuthorTable/DeleteButton';

const getAuthors = async () => {
  const response = await fetch('http://localhost:3000/api/authors', {
    method: 'GET',
    cache: 'no-store', // default: force-cache (ssgのようなもの)
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return response.json();
};

export const AuthorTable = async () => {
  const authors = await getAuthors();

  return (
    <div>
      <h1>Authors</h1>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>{/* 編集 */}</th>
            <th>{/* 削除 */}</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author: any) => (
            <tr key={author.id}>
              <td>{author.name}</td>
              <td>{author.email}</td>
              <td>
                <a href={`/authors/${author.id}/edit`}>編集</a>
              </td>
              <td>
                <DeleteButton id={author.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
