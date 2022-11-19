/** @format */
import { useTypedSelector } from '../../hooks/use-typed-selector';
import CellListItem from '../cell-list-item/cell-list-item';
import AddCell from '../add-cell/add-cell';
import { Fragment, useEffect } from 'react';
import { useActions } from '../../hooks/use-actions';

import './cell-list.css';

const CellList: React.FC = () => {
  const cells = useTypedSelector(({ cells: { order, data } }) =>
    order.map((id) => data[id])
  );

  const { fetchCells } = useActions();

  useEffect(() => {
    fetchCells();
  }, []);

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previosCellId={cell.id} />
    </Fragment>
  ));
  return (
    <div className="cell-list">
      <AddCell forceVisible={cells.length === 0} previosCellId={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
