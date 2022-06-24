
import { Button, Modal } from 'react-bootstrap';
import { EditFormView } from '../edit/EditFormView';

export const CreateOfferse = ({ show, cancel, save, name, description, price, handleId, handleName, handleDescription, handlePrice }) => {
  return (
    <>
      <Modal show={show} onHide={cancel}>
        <Modal.Header closeButton>
          <Modal.Title>Cree una Oferta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditFormView
            editMode={show}
            handleId={handleId}
            handleName={handleName}
            handleDescription={handleDescription}
            handlePrice={handlePrice}
            handleSubmit={save}
            name={name}
            description={description}
            price={price}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancel}>
            Close
          </Button>
          <Button variant="primary" onClick={save}>
            Save Offerse
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
