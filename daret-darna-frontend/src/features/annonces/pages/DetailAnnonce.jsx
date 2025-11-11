import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../../components/ui/Spinner';
import MapView from '../../../components/shared/MapView';
import { useAnnonces } from '../hooks/useAnnonces';

const DetailAnnonce = () => {
  const { id } = useParams();
  const { selectedAnnonce, isLoading, fetchById } = useAnnonces();

  useEffect(() => {
    if (id) {
      fetchById(id);
    }
  }, [id, fetchById]);

  if (isLoading || !selectedAnnonce) {
    return (
      <div className="flex justify-center py-12">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <article className="mx-auto max-w-5xl space-y-6 p-4">
      <img
        src={selectedAnnonce.coverImage ?? '/placeholder.jpg'}
        alt={selectedAnnonce.title}
        className="h-80 w-full rounded-lg object-cover"
      />
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-gray-900">{selectedAnnonce.title}</h1>
          <p className="text-sm text-gray-600">{selectedAnnonce.location}</p>
        </div>
        <span className="text-2xl font-semibold text-primary-600">{selectedAnnonce.price}</span>
      </header>
      <p className="text-gray-700">{selectedAnnonce.description}</p>
      <MapView latitude={selectedAnnonce.latitude} longitude={selectedAnnonce.longitude} />
    </article>
  );
};

export default DetailAnnonce;
