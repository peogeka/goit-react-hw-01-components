import PropTypes from 'prop-types';
import { TableTransaction,TableHeader,TableBody } from "./TransactionHistory.styled";
export const TransactionHistory = ({ items }) => {
    return (
      <TableTransaction>
        <TableHeader>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </TableHeader>
  
        <TableBody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </TableBody>
      </TableTransaction>
    );
  };

  TransactionHistory.propTypes = {
    items: PropTypes.array,
  };