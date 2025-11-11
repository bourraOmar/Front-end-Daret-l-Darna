import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../../components/ui/Input';
import Button from '../../../components/ui/Button';
import { login } from '../../../api/auth.api';
import { useAuth } from '../hooks/useAuth';

const Login = () => {
  const navigate = useNavigate();
  const { setAuthState } = useAuth();
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const { data } = await login(form);
      setAuthState({ user: data.user, token: data.token });
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message ?? 'Connexion échouée');
    }
  };

  return (
    <div className="mx-auto mt-12 max-w-md rounded-lg border bg-white p-6 shadow-sm">
      <h1 className="mb-6 text-2.5xl font-semibold text-gray-900">Connexion</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="password">
            Mot de passe
          </label>
          <Input
            id="password"
            type="password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <Button type="submit" className="w-full">
          Se connecter
        </Button>
      </form>
    </div>
  );
};

export default Login;
