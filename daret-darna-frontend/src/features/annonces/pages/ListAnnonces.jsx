import React, { useEffect } from 'react';
import SearchBar from '../../../components/shared/SearchBar';
import CardAnnonce from '../../../components/shared/CardAnnonce';
import Spinner from '../../../components/ui/Spinner';
import { useAnnonces } from '../hooks/useAnnonces';

const ListAnnonces = () => {
  const { annonces, isLoading, query, setQuery, fetchAll } = useAnnonces();

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  return (
    <section className="mx-auto max-w-6xl space-y-6 p-4">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Annonces</h1>
          <p className="text-sm text-gray-600">Découvrez les dernières annonces disponibles.</p>
        </div>
        <SearchBar value={query} onChange={setQuery} onSubmit={fetchAll} placeholder="Rechercher une annonce" />
      </header>
      {isLoading ? (
        <div className="flex justify-center py-12">
          <Spinner size="lg" />
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {annonces.map((annonce) => (
            <CardAnnonce key={annonce.id} annonce={annonce} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ListAnnonces;
