//Component to list out the cards

import { React, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ListGroup, Row } from "react-bootstrap";

function SearchList({ loading, error, filteredNames }) {
  if (error) {
    return <>{error.message}</>;
  }
  if (loading) {
    return <>Loading...</>;
  }

  return (
    <Fragment>
      <Row className="row-style">
        {filteredNames.length < 1 ? "No result" : filteredNames.map((item) => (
          <Card key={item.name} style={{ width: "18rem" }} className="m-5">
            <Card.Img
              variant="top"
              alt={item.name}
              src={item.flags.svg}
              className="card-image"
            />
            <Card.Title>About: {item.name}</Card.Title>
            <Card.Body>
              <Card.Text>Capital: {item.capital}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Subregion: {item.subregion}</ListGroup.Item>
              <ListGroup.Item>Region: {item.region}</ListGroup.Item>
              <ListGroup.Item>Area: {item.area} Kilometre</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="https://www.google.com/">Google Link</Card.Link>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Fragment>
  );
}
export default SearchList;
