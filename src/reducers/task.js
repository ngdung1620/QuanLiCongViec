import * as taskConstants from "./../constants/task";
import * as ToastHelper from "./../common/toastHelper";
const initialState = {
  listTasks: [],
  taskEditing: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK:
      return {
        ...state,
        listTasks: [],
      };
    case taskConstants.FETCH_TASK_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        listTasks: data,
      };
    case taskConstants.FETCH_TASK_FAILED:
      const { error } = action.payload;
      ToastHelper.toastError(error);
      return {
        ...state,
        listTasks: [],
      };
    case taskConstants.FILTER_TASK_SUCCESS:
      const { data1 } = action.payload;
      return {
        ...state,
        listTasks: data1,
      };
    case taskConstants.ADD_TASK:
      return {
        ...state,
        taskEditing: null,
      };
    case taskConstants.ADD_TASK_SUCCESS:
      const { data2 } = action.payload;
      ToastHelper.toastSuccess('Thêm công việc thành công !');
      return {
        ...state,
        listTasks: state.listTasks.concat([data2]),
      };
    case taskConstants.ADD_TASK_FAILED:
      ToastHelper.toastError(error);
      return {
        ...state,
      };
    case taskConstants.SET_TASK_EDITING:
      const { task } = action.payload;
      return {
        ...state,
        taskEditing: task,
      };
    case taskConstants.UPDATE_TASK:
      return {
        ...state,
      };
    case taskConstants.UPDATE_TASK_SUCCESS:
      const { data3 } = action.payload;
      const { listTasks } = state;
      const index = listTasks.findIndex((item) => item.id === data3.id);
      if (index !== -1) {
        const newList = [
          ...listTasks.slice(0, index),
          data3,
          ...listTasks.slice(index + 1),
        ];
        ToastHelper.toastSuccess('Cập nhập công việc thành công !');
        return {
          ...state,
          listTasks: newList,
        };
      }
      return {
        ...state,
      };
    case taskConstants.UPDATE_TASK_FAILED:
      ToastHelper.toastError(error);
      return {
        ...state,
      };
    case taskConstants.DELETE_TASK:
      return {
        ...state,
      };
    case taskConstants.DELETE_TASK_SUCCESS:
      const { data4 } = action.payload;
      ToastHelper.toastSuccess('Xóa công việc thành công !');
      return {
        ...state,
        listTasks: state.listTasks.filter((item) => item.id !== data4),
      };
    case taskConstants.DELETE_TASK_FAILED:
      ToastHelper.toastError(error);
      return {
        ...state,
      };
    default:
      return state;
  }
};
export default reducer;
