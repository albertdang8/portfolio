import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const customToastStyle = {
  colorDefault: '#fff',
  colorSuccess: '#28a745',
  colorError: '#dc3545',
};

const customProgressStyle = {
  backgroundDefault: '#444',
  backgroundSuccess: '#3e8e3e',
  backgroundError: '#343541',
};

toast.configure({
  toastStyle: customToastStyle,
  progressStyle: customProgressStyle,
});

export default toast;