import React, { Component } from "react";
import firebase from "../../network/firebase";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";

class InfoReview extends Component {
  state = {
    dataList: [],
    isLoading: true,
    doc: "",
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    const todoRef = firebase.database().ref("Survey").limitToLast(10);

    todoRef.on("value", (snapshot) => {
      this.setState({
        isLoading: true
      });
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push(todos[id]);
      }
      this.setState({
        dataList: todoList,
        isLoading: false,
      });
    });
  };

  TodoList = () => {
    return this.state.dataList.map((value, index) => (
      <tr key={index}>
        <td>{index + 1}</td>
        <td>{value.firstName}</td>
        <td>{value.kepuasan}</td>
        <td>{value.saran}</td>
      </tr>
    ));
  };

  RenderList = () => {
    return (
      <Container className="mt-2">
        <InfiniteScroll
          dataLength={10}
          next={() => this.loadData()}
          hasMore={true}
          loader={<h4>Loading...</h4>}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <Table striped bordered hover>
            <thead className="thead-dark">
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Kepuasan</th>
                <th>Kesan / Pesan</th>
              </tr>
            </thead>
            <tbody>{this.TodoList()}</tbody>
          </Table>
        </InfiniteScroll>
      </Container>
    );
  };

  render() {
    return this.RenderList();
  }
}
export default InfoReview;
