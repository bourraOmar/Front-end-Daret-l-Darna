import { useCallback, useState } from 'react';
import {
  fetchAnnonces,
  fetchAnnonceById,
} from '../../../api/annonces.api';

export const useAnnonces = () => {
  const [annonces, setAnnonces] = useState([]);
  const [selectedAnnonce, setSelectedAnnonce] = useState(null);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const fetchAll = useCallback(
    async (params = {}) => {
      setIsLoading(true);
      try {
        const { data } = await fetchAnnonces({ q: query, ...params });
        setAnnonces(data ?? []);
      } catch (error) {
        console.error('Failed to fetch annonces', error);
      } finally {
        setIsLoading(false);
      }
    },
    [query]
  );

  const fetchById = useCallback(async (id) => {
    setIsLoading(true);
    try {
      const { data } = await fetchAnnonceById(id);
      setSelectedAnnonce(data ?? null);
    } catch (error) {
      console.error('Failed to fetch annonce', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    annonces,
    selectedAnnonce,
    query,
    setQuery,
    isLoading,
    fetchAll,
    fetchById,
  };
};
