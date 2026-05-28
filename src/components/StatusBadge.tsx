import React from 'react';

type Status = 'Operacional' | 'Em expansão' | 'Sincronizando' | 'Ativo';

interface StatusBadgeProps {
  status: Status;
}

const COLOR_MAP: Record<Status, string> = {
  Operacional: 'bg-green-100 text-green-700',
  'Em expansão': 'bg-blue-100 text-blue-700',
  Sincronizando: 'bg-amber-100 text-amber-700',
  Ativo: 'bg-green-100 text-green-700',
};

export const StatusBadge = ({ status }: StatusBadgeProps) => (
  <span className={`text-xs font-bold px-3 py-1 rounded-full ${COLOR_MAP[status]}`}>
    {status}
  </span>
);
