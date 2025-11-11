import React from 'react';
import Input from '../../../components/ui/Input';

const FilterBar = ({ filters, onChange }) => (
  <div className="grid gap-4 rounded-md border bg-white p-4 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500" htmlFor="minPrice">
        Prix min
      </label>
      <Input
        id="minPrice"
        type="number"
        value={filters.minPrice ?? ''}
        onChange={(event) => onChange({ ...filters, minPrice: event.target.value })}
      />
    </div>
    <div>
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500" htmlFor="maxPrice">
        Prix max
      </label>
      <Input
        id="maxPrice"
        type="number"
        value={filters.maxPrice ?? ''}
        onChange={(event) => onChange({ ...filters, maxPrice: event.target.value })}
      />
    </div>
    <div className="sm:col-span-2 lg:col-span-2">
      <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-gray-500" htmlFor="location">
        Localisation
      </label>
      <Input
        id="location"
        value={filters.location ?? ''}
        onChange={(event) => onChange({ ...filters, location: event.target.value })}
      />
    </div>
  </div>
);

export default FilterBar;
