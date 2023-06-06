import { Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getPostsDetails } from "../../redux/actions/post";
import { useParams } from "react-router-dom";

export default function PostDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { postDetails } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPostsDetails(id));
  }, [dispatch, id]);

  return (
    <Container
      style={{
        padding: "4px",
      }}
    >
      <Row>
        <Col>
          <h1
            style={{
              alignItems: "center",
            }}
          >
            {postDetails?.title}
          </h1>
          <p
            style={{
              textAlign: "justify",
            }}
          >
            {postDetails?.body}
          </p>
        </Col>
      </Row>
    </Container>
  );
}
