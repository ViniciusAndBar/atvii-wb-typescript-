/* eslint-disable react/jsx-pascal-case */
import * as React from 'react';
import { Button, Table } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar'
import './styles.css'

function Clientes() {
    return (
        <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Clientes</h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Nome Social</th>
                            <th>Email</th>
                            <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gabriela</td>
                                <td>Gabriela furacão</td>
                                <td>@gbs</td>
                                <td>
                                    <Button variant="outline-success" href='/editar_servico/1'>Editar</Button>{' '}
                                    <Button variant="outline-info" href='/clientes/1'>Visualizar</Button>{' '}
                                    <Button variant="outline-danger">Remover</Button>{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Vinicias</td>
                                <td>Vinicias britadeira</td>
                                <td>@va</td>
                                <td>
                                    <Button variant="outline-success">Editar</Button>{' '}
                                    <Button variant="outline-info">Visualizar</Button>{' '}
                                    <Button variant="outline-danger">Remover</Button>{' '}
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Kelvina</td>
                                <td>Kelvina elefantina</td>
                                <td>@kfc</td>
                                <td>
                                    <Button variant="outline-success">Editar</Button>{' '}
                                    <Button variant="outline-info">Visualizar</Button>{' '}
                                    <Button variant="outline-danger">Remover</Button>{' '}
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );
}

export default Clientes;