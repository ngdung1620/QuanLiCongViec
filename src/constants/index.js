import LoginPage from '../containers/LoginPage';
import NotFoundPage from '../containers/NotFoundPage/NotFoundPage';
import SignupPage from '../containers/SignupPage';
import AdminHomePage from './../containers/AdminHomePage/index';
import TaskBoard from './../containers/TaskBoard';
export const FORM_NAME = 'TASK_MANAGEMENT';
export const API_ENDPOINT = "http://localhost:3000";
export const STATUSES = [
  {
    value: 0,
    label: "READY",
  },
  {
    value: 1,
    label: "IN PROGRESS",
  },
  {
    value: 2,
    label: "COMPLETED",
  },
];
export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};
export const ADMIN_ROUTER = [
  {
    name: "Trang Thông Tin",
    path: "/admin",
    exact: true,
    component: AdminHomePage,
  },
  {
    name: "Quản Lí Công Việc",
    path: "/admin/task-board",
    exact: false,
    component: TaskBoard
  },
];
export const ROUTERS = [
  {
    name: "Đăng Nhập",
    path: "/",
    exact: true,
    component: LoginPage
  },
  {
    name: "Đăng Nhập",
    path: "/login",
    component: LoginPage
  },
  {
    name:"Đăng Kí",
    path: "/signup",
    component: SignupPage
  },
  {
    name: "Không tìm thấy trang",
    path: '',
    component: NotFoundPage
  }
]
