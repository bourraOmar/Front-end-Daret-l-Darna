import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../utils/formatPrice';
import { formatDate } from '../../utils/formatDate';

const CardAnnonce = ({ annonce }) => {
  if (!annonce) return null;

  return (
    <article className="overflow-hidden rounded-lg border bg-white shadow-sm transition hover:shadow-md">
      <img
        src={annonce.coverImage ?? '/placeholder.jpg'}
        alt={annonce.title}
        className="h-40 w-full object-cover"
      />
      <div className="space-y-2 p-4">
        <header className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{annonce.title}</h3>
          <span className="text-sm font-medium text-primary-600">{formatPrice(annonce.price)}</span>
        </header>
        <p className="text-sm text-gray-600 line-clamp-3">{annonce.description}</p>
        <footer className="flex items-center justify-between text-xs text-gray-500">
          <span>{formatDate(annonce.createdAt)}</span>
          <Link to={`/annonces/${annonce.id}`} className="font-medium text-primary-600 hover:underline">
            Voir détail
          </Link>
        </footer>
      </div>
    </article>
  );
};

export default CardAnnonce;
