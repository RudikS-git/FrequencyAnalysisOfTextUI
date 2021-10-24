import Table from "react-bootstrap/Table";
import React from "react";
import './TableFrequency.css';

const TableFrequency = ({ firstColumn, items}) => {
  return (
      <div className="table-wrapper">
          <Table className="table" variant="dark" size="sm" responsive="sm" bordered>
              <thead>
              <tr>
                  <th>{firstColumn? firstColumn : 'Content'}</th>
                  <th>Amount</th>
                  <th>Frequency</th>
              </tr>
              </thead>

              <tbody>
              {
                  items && items.map(it => {
                      return (
                          <tr>
                              <td>{it.content}</td>
                              <td>{it.amount}</td>
                              <td>{it.frequency.toFixed(2)}%</td>
                          </tr>
                      )
                  })

              }
              </tbody>
          </Table>
      </div>
  )
}

export default TableFrequency;