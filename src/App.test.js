import {render, screen} from '@testing-library/react';
import App from './App';
import AppTable from "./components/AppTable";

test('renders a table with correct columns', () => {
  const fakeItems = [
    {
      "fileName": "test1.csv",
      "text": "DkqecztWeTtrddkuEvCcXTJhywx",
      "number": 8778967,
      "hex": "1b173281db770059150ef98e6d0a859b"
    }
  ]
  render(<AppTable items={fakeItems} />);
  const tableElement = screen.getByRole('table');
  expect(tableElement).toBeInTheDocument();
  const fileNameCol = screen.getAllByText('File Name');
  const textCol = screen.getAllByText('Text');
  const numberCol = screen.getAllByText('Number');
  const hexCol = screen.getAllByText('Hex');
  expect(fileNameCol).toHaveLength(1);
  expect(textCol).toHaveLength(1);
  expect(numberCol).toHaveLength(1);
  expect(hexCol).toHaveLength(1);
  const temp = screen.getAllByText('test1.csv');
  expect(temp).toHaveLength(1);
});
