import { useEffect, useState } from "react";
import { CheckCircle, XCircle, X } from "lucide-react";
import { useToast } from "../../context/ToastContext";
import "./Toast.css";

const ToastMessage = ({ id, message, type }) => {
  const { removeToast } = useToast();
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 2700); // slightly before context removal to allow exit animation

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      removeToast(id);
    }, 300); // match animation duration
  };

  return (
    <div className={`toast-card toast-${type} ${isClosing ? "toast-exit" : "toast-enter"}`}>
      <div className="toast-icon">
        {type === "success" ? <CheckCircle size={20} /> : <XCircle size={20} />}
      </div>
      <div className="toast-message">{message}</div>
      <button onClick={handleClose} className="toast-close">
        <X size={16} />
      </button>
    </div>
  );
};

const ToastContainer = () => {
  const { toasts } = useToast();

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <ToastMessage key={toast.id} {...toast} />
      ))}
    </div>
  );
};

export default ToastContainer;
