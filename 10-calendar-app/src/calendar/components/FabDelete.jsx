import { useCalendarStore } from '../../hooks';

export const FabDelete = () => {
  const { startDeletingEvent, hasEventSelected, activeEvent } = useCalendarStore();

  const handleDelete = () => {
    startDeletingEvent(activeEvent);
  };

  return (
    <button
    aria-label='btnDelete'
      className="btn btn-danger fab-danger"
      onClick={handleDelete}
      style={{
        display: hasEventSelected ? '' : 'none',
      }}
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  );
};
