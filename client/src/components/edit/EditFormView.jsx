import React from 'react';
import { Button, Form } from 'react-bootstrap';

export const EditFormView = ({ handleId, handleName, handleDescription, handlePrice, handleSubmit, id, name, description, price, editMode }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3' >
        <Form.Label>Código</Form.Label>
            <Form.Control
            disabled={true}
            type='text'
            name='id'
            value={id}
            />
      </Form.Group>
      <Form.Group className='mb-3' >
        <Form.Label>Nombre</Form.Label>
            <Form.Control
            type='text'
            name='name'
            placeholder='Nombre'
            onChange={handleName}
            value={name}
            />
      </Form.Group>
      <Form.Group className='mb-3' >
        <Form.Label>Descripción</Form.Label>
        <Form.Control
          type='text'
          onChange={handleDescription}
          placeholder='Descripción de la offerta'
          name='description'
          as='textarea'
          value={description}
        />
      </Form.Group>
      <Form.Group className='mb-3' >
        <Form.Label>Precio</Form.Label>
        <Form.Control
          type='number'
          onChange={handlePrice}
          placeholder='Precio de la oferta'
          name='price'
          value={price}
        />
      </Form.Group>
      {!editMode && <Button type='submit'>Save task</Button>}
    </Form>
  )
};