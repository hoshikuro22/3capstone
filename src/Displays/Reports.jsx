import  { useState } from 'react';

const MonthYearPicker = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 20 }, (_, index) => currentYear - index);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="space-x-4">
        <select
          className="border p-2 rounded"
          value={selectedMonth}
          onChange={handleMonthChange}
        >
          <option value="" disabled>Select Month</option>
          {months.map((month, index) => (
            <option key={index} value={month}>
              {month} 
            </option>
          ))}
        </select>
        <select
          className="border p-2 rounded"
          value={selectedYear}
          onChange={handleYearChange}
        >
          <option value="" disabled>Select Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MonthYearPicker;