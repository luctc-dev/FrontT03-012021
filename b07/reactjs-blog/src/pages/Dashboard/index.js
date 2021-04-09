import 'antd/dist/antd.css';
import './dashboard.css';
// import { useAuthenticated } from '../../hooks/useAuthenticated';
import DashboardLayout from './DashboardLayout';

export default function Dashboard() {
  // useAuthenticated();

  return (
    <div className="zvn-react-blogs">
      <DashboardLayout />
    </div>
  )
}