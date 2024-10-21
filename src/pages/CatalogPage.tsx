import React from 'react';
import { ListWithPagination } from '../components/organisms/ListWithPagination';

const mockData = [
  { id: 1, title: 'Movie 1', description: 'Description of Movie 1' },
  { id: 2, title: 'Movie 2', description: 'Description of Movie 2' },
  { id: 3, title: 'Movie 3', description: 'Description of Movie 3' },
  { id: 4, title: 'Movie 4', description: 'Description of Movie 1' },
  { id: 5, title: 'Movie 5', description: 'Description of Movie 2' },
  { id: 6, title: 'Movie 6', description: 'Description of Movie 3' },
  { id: 7, title: 'Movie 7', description: 'Description of Movie 1' },
  { id: 8, title: 'Movie 8', description: 'Description of Movie 2' },
  { id: 9, title: 'Movie 9', description: 'Description of Movie 3' },
  { id: 10, title: 'Movie 10', description: 'Description of Movie 1' },
  { id: 11, title: 'Movie 11', description: 'Description of Movie 2' },
  { id: 12, title: 'Movie 12', description: 'Description of Movie 3' },
];

export const CatalogPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <h1 className="text-3xl font-bold mb-6">Movie Catalog</h1>
    <ListWithPagination
      items={mockData}
      renderItem={(item) => (
        <div key={item.id} className="p-2 border-b">
          {item.title}
        </div>
      )}
      itemsPerPage={5} // Defina quantos itens você deseja por página
    />
  </div>
  );
};
