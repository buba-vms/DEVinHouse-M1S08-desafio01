import './Tabela.css';

const dados = [
  {
    id: 1,
    title: 'titulo 1',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, consequatur.',
    date: '15/09/1994',
  },
  {
    id: 2,
    title: 'titulo 2',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, consequatur.',
    date: '15/09/1994',
  },
  {
    id: 3,
    title: 'titulo 3',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, consequatur.',
    date: '15/09/1994',
  },
  {
    id: 4,
    title: 'titulo 4',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, consequatur.',
    date: '15/09/1994',
  },
  {
    id: 5,
    title: 'titulo 5',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, consequatur.',
    date: '15/09/1994',
  },
];

const Tabela = () => {
  return (
    <table>
      <tr>
        <th></th>
        <th>Title</th>
        <th>Description</th>
        <th>Date</th>
      </tr>
      {dados.map((dado) => {
        return (
          <TableLine
            id={dado.id}
            title={dado.title}
            description={dado.description}
            date={dado.date}
          />
        );
      })}
    </table>
  );
};

const TableLine = ({ id, title, description, date }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>{date}</td>
    </tr>
  );
};

export default Tabela;
