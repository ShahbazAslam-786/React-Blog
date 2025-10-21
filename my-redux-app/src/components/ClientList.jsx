import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ClientCard from './ClientCard';
import ClientForm from './ClientForm';

const ClientList = () => {
  const clients = useSelector(state => state.clients);
  const [editingClient, setEditingClient] = useState(null);

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <ClientForm
        editableClient={editingClient}
        onSubmitComplete={() => setEditingClient(null)}
      />
      {clients.map(client => (
        <ClientCard
          key={client.id}
          client={client}
          onEdit={setEditingClient}
        />
      ))}
    </div>
  );
};

export default ClientList;
