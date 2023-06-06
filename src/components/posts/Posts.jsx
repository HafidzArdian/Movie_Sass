import { Card, Col, Container, Row } from "react-bootstrap";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { OutlineButton } from "../button/Button";
import { getPosts } from "../../redux/actions/post";

// import { useDispatch } from "react-redux";

export default function Posts() {
  const dispatch = useDispatch();
  const { posts } = useSelector((state) => state.post);
  // const {coba} = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container
      style={{
        padding: 0,
        display: "grid",
        flexWrap: "wrap",
        gridTemplateColumns: "repeat(2,1fr)",
        margin: "5px 15px",
        gap: "20px",
        position: "relative",
      }}
    >
      <div
        style={{
          margin: "10px",
        }}
      >
        <Link to="/">
          <OutlineButton className="btn">Back</OutlineButton>
        </Link>
      </div>
      {/* {coba} */}
      {posts?.length > 0 &&
        posts.map((post) => (
          <Row key={post?.id}>
            <Col>
              <Card
                style={{
                  margin: "10px",
                  padding: "10px",
                  borderRadius: "10px",
                  backgroundColor: "#f5f5f5",
                  display: "block",
                }}
              >
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "black",
                    }}
                  >
                    {post?.title}
                  </Card.Title>
                  <Card.Text
                    style={{
                      color: "black",
                      margin: "1rem",
                    }}
                  >
                    {post?.body}
                    <Link to={`/posts/${post?.id}`}>Details... </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        ))}
    </Container>
  );
}
