import React from 'react';
import '../css/Table.css';

class Table extends React.Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Valor</th>
            <th scope="col">Moeda</th>
            <th scope="col">Câmbio utilizado</th>
            <th scope="col">Valor convertido</th>
            <th scope="col">Moeda de conversão</th>
            <th scope="col">Método de pagamento</th>
            <th scope="col">Editar/Excluir</th>
            <th scope="col">Tag</th>
          </tr>
        </thead>
      </table>
    );
  }
}

export default Table;
