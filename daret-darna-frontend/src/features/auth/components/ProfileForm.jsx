import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { updateProfile } from '../../../api/auth.api';
import { useAuth } from '../hooks/useAuth';

const ProfileForm = () => {
  const { user, setAuthState } = useAuth();
  const [form, setForm] = useState({ name: user?.name ?? '', email: user?.email ?? '' });
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('loading');

    try {
      const { data } = await updateProfile(form);
      setAuthState((prev) => ({ ...prev, user: data.user }));
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="name">
          Nom complet
        </label>
        <Input
          id="name"
          value={form.name}
          onChange={(event) => setForm({ ...form, name: event.target.value })}
          required
        />
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
          Email
        </label>
        <Input
          id="email"
          type="email"
          value={form.email}
          onChange={(event) => setForm({ ...form, email: event.target.value })}
          required
        />
      </div>
      <Button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Enregistrement...' : 'Mettre à jour'}
      </Button>
      {status === 'success' && <p className="text-sm text-green-600">Profil mis à jour.</p>}
      {status === 'error' && <p className="text-sm text-red-600">Une erreur est survenue.</p>}
    </form>
  );
};

export default ProfileForm;
