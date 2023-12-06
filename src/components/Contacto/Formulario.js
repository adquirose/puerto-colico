import React, { useState } from 'react'
import Axios from 'axios'
import { Form, CardBody, FormGroup, Input, Row, Col, Button, Spinner } from 'reactstrap'

const INITIAL_STATE = {
	nombre: "",
	email: "",
	message: "",
};
function Formulario() {
	const [data, setData] = useState(INITIAL_STATE);
	const [isLoading, setIsLoading] = useState(false);
	const handleOnChange = (event) => {
		setData({ ...data, [event.target.name]: event.target.value });
	};
	const handleOnSubmit = (event) => {
		event.preventDefault();
		setIsLoading(true);
		const { nombre, email, message } = data;
		const text = `
			Nombre: ${nombre} 
			Email: ${email} 
			Mensaje: ${message}
        `
      	const info = {
			to: "nuevaumbrales@tavacorp.cl",
      		cco:"adquirose@gmail.com",
			replyTo: email,
			subject:'Formulario Contacto',
			text: text
		}
		Axios.post("https://us-central1-firemailer.cloudfunctions.net/submitContactoFZ", info)
			.then((res) => {
				console.log(`mensaje enviado: ${res.data.isEmailSend}`);
				setIsLoading(false);
			})
			.catch((error) => console.log(`ha ocurrido un error ${error}`));

		setData(INITIAL_STATE);
	};
	
	const { nombre, email, message } = data;
	const isDisabled = nombre === "" || email === "" ;
	return (
		<Form id="contact-form" method="post" role="form" onSubmit={handleOnSubmit}>
			<CardBody>
				<FormGroup className="label-floating">
					<label className="control-label">Nombre</label>
					<Input
						name="nombre"
						placeholder="Tu nombre"
						type="text"
						value={nombre}
						onChange={handleOnChange}
					/>
				</FormGroup>

				<FormGroup className="label-floating">
					<label className="control-label">E-mail</label>
					<Input 
            name="email" 
            placeholder="Tu email" 
            type="email" 
            value={email}
            onChange={handleOnChange}
          />
				</FormGroup>
				<FormGroup className="label-floating">
					<label className="control-label">Mensaje</label>
					<Input
						id="message"
						name="message"
						placeholder="Tu mensaje"
						type="textarea"
						rows="6"
            value={message}
            onChange={handleOnChange}
					/>
				</FormGroup>
				<Row>
					<Col md="6">
            {isLoading ? <Spinner/>:
              <Button
                disabled={isDisabled}
                className="pull-left"
                color="primary"
                type="submit"
              >
                Enviar
              </Button>
            }
					</Col>
				</Row>
			</CardBody>
		</Form>
	);
}
export default Formulario