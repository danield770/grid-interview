import React from 'react';
import './Grid.css';

const Grid = ({ config, data }) => (
  <table className='grid' style={{ '--numCols': config.length }}>
    <thead>
      <tr>
        {config.map(({ title, field }) => (
          <th key={field}>{title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((data) => (
        <tr key={data.imdbID}>
          <td>{data[config[0].field]}</td>
          <td>{data[config[1].field]}</td>
          <td>{data[config[2].field]}</td>
          <td>
            {React.createElement(config[3].component, {
              data: data[config[3].field],
            })}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Grid;
