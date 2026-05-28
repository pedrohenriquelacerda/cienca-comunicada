import React from 'react';
import clsx from 'clsx';

type EyebrowColor = 'pink' | 'teal' | 'purple';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  eyebrowColor?: EyebrowColor;
  center?: boolean;
  className?: string;
}

const EYEBROW_COLORS: Record<EyebrowColor, string> = {
  pink: 'text-cc-pink',
  teal: 'text-cc-teal',
  purple: 'text-cc-purple',
};

export const SectionHeader = ({
  eyebrow,
  title,
  eyebrowColor = 'teal',
  center = false,
  className,
}: SectionHeaderProps) => (
  <div className={clsx(center && 'text-center', className)}>
    <p className={clsx('text-xs font-bold tracking-widest uppercase mb-2', EYEBROW_COLORS[eyebrowColor])}>
      {eyebrow}
    </p>
    <h2 className="font-display text-3xl font-black text-cc-purple">{title}</h2>
  </div>
);
