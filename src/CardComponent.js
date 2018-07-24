import React, { Component } from 'react';
import { NavLink, Card, Button, CardTitle, CardImg, CardBody, CardBlock, CardText, Row, Col } from 'reactstrap';

class CardComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {category, name, description, url } = this.props.cards;
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
          <CardBlock>
            <NavLink href={url} target="_blank">{name}</NavLink>
            <CardText>{description}</CardText>
            <CardText>{category}</CardText>
          </CardBlock>
        </Card>
      </div>
      );
    };
  };
export default CardComponent;
