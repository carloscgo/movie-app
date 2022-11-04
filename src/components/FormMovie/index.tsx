import { useState, memo } from "react";
import { Form, Button, FloatingLabel, Row, Col } from 'react-bootstrap';
import Select from 'react-select';
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message/dist'
import uuid from 'react-uuid';

import { Props } from './interfaces';
import Container from './styles';

const FormMovie = ({ genres, onSave }: Props) => {
  const [selectedGenre, setSelectedGenre] = useState({});

  const {
    register,
    errors,
    setValue,
    trigger,
    getValues,
    formState: { isValid }
  }: any = useForm({
    mode: 'all',
    reValidateMode: 'onChange'
  })

  const error = (name: string) => errors && (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }: any) => (
        <Form.Text id={`helpBlock-${name}`} muted>
          {message}
        </Form.Text>
      )}
    />
  )

  const onSubmit = () => {
    if (!isValid) return

    const data = getValues()

    onSave({
      id: uuid(),
      genre: data.category,
      img: data.image,
      title: data.title,
      date: data.date,
      description: data.description
    })
  }

  return (
    <Container fluid>
      <Row className="g-2">
        <Col md={6} sm={12} lg={4}>
          <FloatingLabel label="Titulo" className="mb-3" controlId="formTitle">
            <Form.Control type="text" name='title' maxLength={50} {...register('title', {
              required: true
            })}
              onChange={() => trigger()}
            />
          </FloatingLabel>

          {error('title')}
        </Col>
        <Col md={6} sm={12} lg={4}>
          <FloatingLabel label="Fecha" className="mb-3" controlId="formDate">
            <Form.Control type="date" name="date" {...register('date', {
              required: true
            })}
              onChange={() => trigger()}
            />
          </FloatingLabel>

          {error('date')}
        </Col>
        <Col md={6} sm={12} lg={4}>
          <FloatingLabel label="Categoria" className="mb-3" controlId="formCategory">
            <Select
              defaultValue={selectedGenre}
              onChange={(e: any) => {
                setSelectedGenre(e)

                setValue('category', e.value)

                trigger()
              }}
              name="category"
              className="form-control select"
              isClearable={true}
              isSearchable={true}
              options={genres}
              required={true}
            />
          </FloatingLabel>

          {error('category')}
        </Col>
        <Col md={6} sm={12} lg={4}>
          <FloatingLabel label="Imagen" className="mb-3" controlId="formImage">
            <Form.Control type="file" name="image" accept="image/*"
              onChange={(e: any) => {
                const image = e.target.files[0];
                const reader = new FileReader();

                reader.onload = function (upload: any) {
                  setValue('image', upload.target.result)

                  trigger()
                };
                reader.readAsDataURL(image);
              }}
            />
          </FloatingLabel>

          {error('image')}
        </Col>
        <Col md={12} lg={8}>
          <FloatingLabel label="Descripcion" className="mb-3" controlId="formDescription">
            <Form.Control type="text" name="description" {...register('description', {
              required: true
            })}
              onChange={() => trigger()}
            />
          </FloatingLabel>

          {error('description')}
        </Col>
      </Row>

      <Row className="g-2 mt-4">
        <Col className="d-flex justify-content-center">
          <Button variant="dark" size="lg" type="submit" disabled={!isValid} onClick={() => onSubmit()}>
            <i className="bi bi-save-fill"></i> Guardar
          </Button>
        </Col>
      </Row>
    </Container>
  )
}

export default memo(FormMovie)
