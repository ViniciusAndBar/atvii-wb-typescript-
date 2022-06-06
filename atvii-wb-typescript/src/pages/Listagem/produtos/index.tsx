/* eslint-disable react/jsx-pascal-case */
import * as React from 'react';
import { Table } from 'react-bootstrap';
import NavBar_ from '../../../component/NavBar'

function Produtos() {
    return (
        <section>
            <header>
                <NavBar_/>
            </header>
            <main>
                <h1>Produtos</h1>
                <div className="tables">
                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                            <th>Id</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Shampoo ant-calvice</td>
                                <td>R$15</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Shampoo ant-bacterias</td>
                                <td>R$20</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Shampoo CR7 Clear-Man</td>
                                <td>R$1500</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </main>
        </section>
    );
}

export default Produtos;