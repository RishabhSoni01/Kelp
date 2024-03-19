const fs = require('fs');

// Sample data
const data = [
  ['name.firstName', 'name.lastName', 'age', 'address.line1', 'address.line2', 'address.city', 'address.state', 'gender'],
  ['John', 'Doe', 25, '123 Main St', '', 'New York', 'NY', 'male'],
  ['Jane', 'Smith', 30, '456 Elm St', '', 'Los Angeles', 'CA', 'female'],
  ['Michael', 'Johnson', 40, '789 Oak St', '', 'Chicago', 'IL', 'male'],
  ['Emily', 'Davis', 35, '101 Pine St', '', 'San Francisco', 'CA', 'female']
];

// Convert data to CSV format
const csvData = data.map(row => row.join(','));

// Write CSV data to a file
fs.writeFileSync('sample.csv', csvData.join('\n'));

console.log('CSV file created successfully.');