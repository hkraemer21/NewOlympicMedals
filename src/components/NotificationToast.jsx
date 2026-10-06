import { useEffect } from "react";

function NotificationToast({ notification, onClose }) {
  useEffect(() => {
    if (!notification) {
      return undefined;
    }

    const timeoutId = window.setTimeout(onClose, 3000);
    return () => window.clearTimeout(timeoutId);
  }, [notification, onClose]);

  if (!notification) {
    return null;
  }

  return (
    <div className="notification-toast" role="status" aria-live="polite">
      <strong>{notification.title}</strong>
      <span>{notification.message}</span>
      <button
        type="button"
        className="notification-toast-close"
        onClick={onClose}
        aria-label="Dismiss notification"
      >
        ×
      </button>
    </div>
  );
}

export default NotificationToast;
