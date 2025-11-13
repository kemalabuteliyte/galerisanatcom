import type { ReactNode } from 'react';

/**
 * Empty state component props
 */
interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}

/**
 * Empty state component
 * Displays when there is no data to show
 */
const EmptyState = ({ icon, title, description, action }: EmptyStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
      {icon && <div className="mb-4 text-6xl opacity-50">{icon}</div>}
      <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      {description && (
        <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
          {description}
        </p>
      )}
      {action && <div>{action}</div>}
    </div>
  );
};

export default EmptyState;
