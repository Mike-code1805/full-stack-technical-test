
import { Button, Modal } from 'react-bootstrap';
import { EditFormView } from './EditFormView';

export const EditModelView = ({ show, cancel, save, id, name, description, price, handleId, handleName, handleDescription, handlePrice }) => {
  return (
    <>
      <Modal show={show} onHide={cancel}>
        <Modal.Header closeButton>
          <Modal.Title>Detalles de la Oferta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditFormView
            editMode={show}
            handleId={handleId}
            handleName={handleName}
            handleDescription={handleDescription}
            handlePrice={handlePrice}
            handleSubmit={save}
            id={id}
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
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
