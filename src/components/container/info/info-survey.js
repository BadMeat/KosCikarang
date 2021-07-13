import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Formik } from "formik";
import * as yup from "yup";
import Col from "react-bootstrap/Col";
import Select from "react-select";
import firebase from "../../network/firebase";
import Alert from "react-bootstrap/Alert";

const options = [
  { value: "Puas Banget", label: "Puas Banget" },
  { value: "Puas", label: "Puas" },
  { value: "Biasa", label: "Biasa" },
  { value: "Kureng", label: "Kureng" },
  { value: "Parah", label: "Parah" },
];

class InfoSurvey extends Component {
  state = {
    isSuccess: false,
    isError: false,
  };

  setShow = (enable) => {
    this.setState({
      isSuccess: enable,
    });
  };

  setShowError = (enable) => {
    this.setState({
      isError: enable,
    });
  };

  submitData = ({ firstName, lastName, kepuasan, saran }, { resetForm }) => {
    try {
      const todoRef = firebase.database().ref("Survey");
      const submitedData = {
        firstName,
        lastName,
        kepuasan,
        saran,
      };

      todoRef.push(submitedData);
      this.setState({
        isSuccess: true,
      });
      resetForm();
    } catch (error) {
      this.setShowError(false);
    }
  };

  renderSuccess = () => {
    return (
      <Alert show={this.state.isSuccess} variant="success" className="mt-2">
        <Alert.Heading>Survey</Alert.Heading>
        <p>Terima kasih sudah memberikan kesan, pesan dan saran</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => this.setShow(false)} variant="outline-success">
            Close
          </Button>
        </div>
      </Alert>
    );
  };

  renderError = () => {
    if (this.state.isError) {
      return (
        <Alert
          variant="danger"
          onClose={() => this.setShowError(false)}
          dismissible
        >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>
            Change this and that and try again. Duis mollis, est non commodo
            luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
            Cras mattis consectetur purus sit amet fermentum.
          </p>
        </Alert>
      );
    }
  };

  render() {
    const schema = yup.object().shape({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      kepuasan: yup.string().required("Pilih kepuasan dulu"),
      saran: yup.string().required(),
    });

    return (
      <div>
        <h1 className="jarak-atas">
          <center>Survey</center>
        </h1>
        <Formik
          validationSchema={schema}
          onSubmit={this.submitData}
          enableReinitialize
          initialValues={{
            firstName: "",
            lastName: "",
            kepuasan: "Puas Banget",
            saran: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            setFieldValue,
            errors,
            isSubmitting,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col} md="4" controlId="validationFormik01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                    isValid={touched.firstName && !errors.firstName}
                    isInvalid={!!errors.firstName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.firstName}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationFormik02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                    isValid={touched.lastName && !errors.lastName}
                    isInvalid={!!errors.lastName}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastName}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="2"
                  sm="6"
                  xs="6"
                  controlId="validationFormik03"
                >
                  <Form.Label>Kepuasan</Form.Label>
                  <Select
                    value={
                      options
                        ? options.find(
                            (option) => option.value === values.kepuasan
                          )
                        : ""
                    }
                    onChange={(value) => setFieldValue("kepuasan", value.value)}
                    options={options}
                  />
                </Form.Group>

                <Form.Group as={Col} md="12" controlId="validationFormikSaran">
                  <Form.Label>Saran</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="saran"
                    aria-describedby="inputGroupPrepend"
                    name="saran"
                    value={values.saran}
                    onChange={handleChange}
                    isInvalid={!!errors.saran}
                  />
                  <Form.Control.Feedback type="invalid">
                    {"Silahkan Isi Terlebih dahulu"}
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4">
                  <Button
                    type="submit"
                    style={{ marginTop: 20 }}
                    disabled={isSubmitting}
                  >
                    Submit form
                  </Button>
                </Form.Group>
              </Form.Row>
            </Form>
          )}
        </Formik>
        {this.renderSuccess()}
        {this.renderError()}
      </div>
    );
  }
}
export default InfoSurvey;
