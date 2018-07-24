import React from 'react';
import { Card, Button, CardTitle, CardImg, CardBody, CardText, Row, Col } from 'reactstrap';

const Cardo = (props) => {
  return (
    <Row>
      <Col sm="3">
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card Title</CardTitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
        </CardBody>
      </Card>
        </Col>


    </Row>
  );
};

export default Cardo;
