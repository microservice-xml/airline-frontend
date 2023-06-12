import { useContext, useEffect, useState } from "react";
import TicketCard from "../../components/TicketCard";
import { getAllTicketByUser } from "../../services/tickets/ticketsService";
import AuthContext from "../../store/login/AuthContext";
import "./index.scss";
import { addApiKey, getAllApiKeysByUser } from "../../services/apiKeys/apiKeysService";
import { Button, Checkbox, TextField } from "@mui/material";

const MyApiKeys = () => {
  const context = useContext(AuthContext);
  const [apiKeys, setApiKeys] = useState<any>([]);
  const [permanent, setPermanent] = useState(false);
  const [expiryDate, setExpiryDate] = useState("");

  useEffect(() => {
    fetchApiKeys();
  }, []);

  const fetchApiKeys = async () => {
    const res = await getAllApiKeysByUser(context.user.id);
    setApiKeys(res.data);
  };

  const addApiKeyHandler = async () => {
    const payload = {
      userId: context.user.id,
      permanent: permanent,
      expiryDate: expiryDate || "2100-01-01"
    }
    await addApiKey(payload);
    window.location.reload();
  };

  const formatDate = (date: any) => {
    return date[0] + "-" + date[1] + "-" + date[2];
  }

  return (
    <div className="my-api-keys-container">
      {apiKeys.map((t: any) => {
        return (
          <div className="api-key-card">
            <p>Key: {t.key}</p>
            <p>Expiry date: {t.permanent ? <>Permanent</> : <>{formatDate(t.expiryDate)}</>}</p>
          </div>
        );
      })}
      <div className="api-key-card">
            <p>Add new api key</p>
            <Checkbox
              checked={permanent}
              onChange={() => setPermanent(!permanent)}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            {!permanent &&
            <TextField
            id="outlined-controlled"
            label="Expiry date"
            value={expiryDate}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setExpiryDate(event.target.value);
            }}
            />}
            <Button
              onClick={addApiKeyHandler}
              variant="contained"
            >
              Add api key
            </Button>
          </div>
    </div>
  );
};

export default MyApiKeys;
