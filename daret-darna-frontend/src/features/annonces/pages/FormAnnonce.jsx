import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { createAnnonce, updateAnnonce } from '../../../api/annonces.api';

const defaultState = {
  title: '',
  description: '',
  price: '',
  location: '',
};

const FormAnnonce = ({ annonce, onSuccess }) => {
  const [form, setForm] = useState(annonce ?? defaultState);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');

    try {
      if (annonce?.id) {
        await updateAnnonce(annonce.id, form);
      } else {
        await createAnnonce(form);
      }
      setStatus('success');
      onSuccess?.();
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="title">
          Titre
        </label>
        <Input
          id="title"
          value={form.title}
          onChange={(event) => setForm({ ...form, title: event.target.value })}
          required
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
          rows={4}
          value={form.description}
          onChange={(event) => setForm({ ...form, description: event.target.value })}
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="price">
            Prix
          </label>
          <Input
            id="price"
            type="number"
            value={form.price}
            onChange={(event) => setForm({ ...form, price: event.target.value })}
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="location">
            Localisation
          </label>
          <Input
            id="location"
            value={form.location}
            onChange={(event) => setForm({ ...form, location: event.target.value })}
            required
          />
        </div>
      </div>
      <Button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Enregistrement...' : annonce ? 'Mettre à jour' : 'Créer'}
      </Button>
      {status === 'success' && <p className="text-sm text-green-600">Annonce enregistrée.</p>}
      {status === 'error' && <p className="text-sm text-red-600">Une erreur est survenue.</p>}
    </form>
  );
};

export default FormAnnonce;
