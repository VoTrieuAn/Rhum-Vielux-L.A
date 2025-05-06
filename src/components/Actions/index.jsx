import ButtonDelete from "./ButtonDelete";
import ButtonDetail from "./ButtonDetail";
import ButtonEdit from "./ButtonEdit";

const Action = ({ id }) => {
  return (
    <div className="flex gap-1">
      <ButtonDetail id={id} />
      <ButtonEdit id={id} />
      <ButtonDelete id={id} />
    </div>
  );
};
export default Action;
