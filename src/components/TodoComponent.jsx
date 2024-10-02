import { useDispatch } from "react-redux";
import { BsCheckCircle, BsPencil, BsTrash } from "react-icons/bs";
import { changeTodoStatus, removeTodos } from "../redux/todoSlice";

const Todo = ({ todo, handleEdit }) => {
  const dispatch = useDispatch();

 
  const handleStatus = () => {
    dispatch(changeTodoStatus(todo.id));
  };

  const handleDelete = () => {
    dispatch(removeTodos(todo.id));
  };

  return (
    <div className="todo">
      <div className="text">
        <span className={todo.status === "complete" ? "complete" : ""}>
          {todo.text}
        </span>
      </div>

      <div className="edit">
        <div
          onClick={() => {
            handleEdit(todo.id);
          }}
        >
          <BsPencil />
        </div>
        <div
          onClick={handleStatus}
        >
          <BsCheckCircle />
        </div>
        <div
          onClick={ handleDelete}
        >
          <BsTrash />
        </div>
      </div>
    </div>
  );
};

export default Todo;
