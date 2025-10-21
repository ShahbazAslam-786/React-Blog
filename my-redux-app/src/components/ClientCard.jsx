// src/components/ClientCard.jsx
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteClient, toggleCleared } from '../features/clientsSlice';

const ClientCard = ({ client, onEdit }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this client?')) {
      dispatch(deleteClient(client.id));
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-3 hover:shadow-xl transition duration-200 border border-gray-200">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{client.name}</h3>
        <p className="text-sm text-gray-600">{client.email}</p>
        {client.phone && <p className="text-sm text-gray-600">📞 {client.phone}</p>}
        {client.idCard && <p className="text-sm text-gray-600">🆔 {client.idCard}</p>}
        {client.notes && <p className="text-sm text-gray-500 mt-2 italic">{client.notes}</p>}
        <label className="flex items-center mt-3" htmlFor={`cleared-${client.id}`}>
          <input
            type="checkbox"
            id={`cleared-${client.id}`}
            checked={client.cleared}
            onChange={() => dispatch(toggleCleared(client.id))}
          className="mr-2 accent-green-600"
            autoComplete="off"
          />
          <span className="text-sm text-gray-700">Cleared</span>
        </label>
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => {
            if (client.email.toLowerCase().includes('@gmail.com')) {
              window.alert('You are editing a client with a Gmail address.');
            }
            onEdit(client);
          }}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 text-sm font-medium transition"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 text-sm font-medium transition"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default ClientCard;
