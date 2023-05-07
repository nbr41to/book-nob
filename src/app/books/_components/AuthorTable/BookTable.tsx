import { DeleteButton } from '@/app/authors/AuthorTable/DeleteButton';
import { Book } from '@prisma/client';
import { use } from 'react';

const getBooks = async () => {
  const response = await fetch('http://localhost:3000/api/books', {
    method: 'GET',
    cache: 'no-store', // default: force-cache (ssgのようなもの)
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return response.json();
};

export const BookTable = () => {
  const books = use(getBooks());

  return (
    <div>
      <h1>Authors</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>{/* 編集 */}</th>
            <th>{/* 削除 */}</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book: Book) => (
            <tr key={book.id}>
              <td>{book.title}</td>
              <td>{book.description}</td>
              <td>{book.price}</td>
              <td>
                <a href={`/authors/${book.id}/edit`}>編集</a>
              </td>
              <td>
                <DeleteButton id={book.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
