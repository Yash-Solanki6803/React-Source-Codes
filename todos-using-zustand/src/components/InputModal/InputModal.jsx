import { useStore } from "../../store";
import Card from "../Card/Card";
import "./InputModal.css";

const InputModal = () => {
  const isModalOpen = useStore((state) => state.isModalOpen);
  const toggleModal = useStore((state) => state.toggleModal);
  return (
    <>
      <div className="input-wrapper">
        <button className="input" onClick={() => toggleModal()}>
          Add Task
        </button>
      </div>
      {isModalOpen && <Card />}
    </>
  );
};

export default InputModal;
