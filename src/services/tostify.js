import { toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure({
  position: 'top-right',
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  transition: Zoom,
});

export const warnNotify = text => toast.error(text);

export const infoNotify = text => toast.info(text);
