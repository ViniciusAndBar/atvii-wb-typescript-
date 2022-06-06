/* eslint-disable react/jsx-pascal-case */
import * as React from 'react';
import { Table } from 'react-bootstrap';
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
                            <th>Sobrenome</th>
                            <th>Email</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Gabriela</td>
                                <td>bicha</td>
                                <td>@gbs</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Vinicias</td>
                                <td>Andrade</td>
                                <td>@va</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Kelvina</td>
                                <td>Mirenda</td>
                                <td>@kfc</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );
}

export default Clientes;