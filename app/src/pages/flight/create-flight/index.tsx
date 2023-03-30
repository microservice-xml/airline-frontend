import AddFlight from "../../../components/Forms/AddFlight";
import useRouteProtector from "../../../utils/routeProtector/routeProtector";
import "./index.scss";

const CreateFlight = () => {
  let _ = useRouteProtector({ role: "ADMIN" });

  return (
    <div className="add-flight-page">
      <div className="add-flight-page__form-container">
        <AddFlight />
      </div>
    </div>
  );
};

export default CreateFlight;
