import React from 'react'
import { Col, Row, Form, Button } from 'react-bootstrap'

export default function TableControls ({ listFrom, listTo }) {
  return (
    <Row className='justify-content-between'>
      <Col xs={4}>
        <Form>
          <Form.Group>
            <Form.Control as='select'>
              <option>Все данные</option>
              <option>Сегмент 1</option>
              <option>Сегмент 2</option>
              <option>Сегмент 3</option>
              <option>Сегмент 4</option>
              <option>Сегмент 5</option>
            </Form.Control>
          </Form.Group>
        </Form>
      </Col>
      <Col xs={6}>
        <Row className='justify-content-end'>
          <Button className='mr-3 mb-3'>Предыдущая страница</Button>
          <Button className='mb-3 mr-3'>Следующая страница</Button>
          <h3 className='mb-3 mr-3'>
            Показаны результаты: {listFrom} - {listTo}
          </h3>
        </Row>
      </Col>
    </Row>
  )
}
