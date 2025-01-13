import { useState } from "react";

interface ToggleProps {
  checkTable: (status: boolean) => void;
  showTables: boolean;
}

export default function Booking({checkTable, showTables}: ToggleProps) {
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");

  const actualMonth = new Date().getMonth();
  const actualDay = new Date().getDate();

  let months = [
    { name: "January", days: 31 },
    { name: "February", days: 28 },
    { name: "March", days: 31 },
    { name: "April", days: 30 },
    { name: "May", days: 31 },
    { name: "June", days: 30 },
    { name: "July", days: 31 },
    { name: "August", days: 31 },
    { name: "September", days: 30 },
    { name: "October", days: 31 },
    { name: "November", days: 30 },
    { name: "December", days: 31 },
  ];

  const filteredMonths = months.slice(actualMonth, actualMonth + 2);

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(e.target.value);
    setSelectedDay("");
    checkTable(false);
  };

  const handleDayChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDay(e.target.value);
    checkTable(false);
  };

  const daysInMonth =
    selectedMonth !== ""
      ? filteredMonths.find((month) => month.name === selectedMonth)?.days || 0
      : 0;

  // Jeśli wybrany miesiąc to bieżący, uwzględnij aktualny dzień
  const daysAvailable =
    selectedMonth === months[actualMonth].name
      ? Array.from({ length: daysInMonth - actualDay + 1 }, (_, i) => i + actualDay)
      : Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="flex flex-col items-center">
        <label
          htmlFor="month-select"
          className="mb-2 text-lg font-semibold text-gray-300"
        >
          Select a Month
        </label>
        <select
          id="month-select"
          value={selectedMonth}
          onChange={handleMonthChange}
          className="w-64 px-4 py-2 bg-neutral-800 text-neutral-300 border border-gray-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
        >
          <option value="" disabled>
            Choose a month
          </option>
          {filteredMonths.map((month) => (
            <option key={month.name} value={month.name} className="bg-neutral-900">
              {month.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col items-center">
        <label
          htmlFor="day-select"
          className="mb-2 text-lg font-semibold text-gray-300"
        >
          Select a Day
        </label>
        <select
          id="day-select"
          value={selectedDay}
          onChange={handleDayChange}
          disabled={!selectedMonth}
          className={`w-64 px-4 py-2 ${
            selectedMonth
              ? "bg-neutral-800 text-neutral-300 border-neutral-600"
              : "bg-neutral-700 text-neutral-500 cursor-not-allowed"
          } border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:focus:ring-white focus:border-white`}
        >
          <option value="" disabled>
            {selectedMonth ? "Choose a day" : "Select a month first"}
          </option>
          {daysAvailable.map((day) => (
            <option key={day} value={day} className="bg-neutral-900">
              {day}
            </option>
          ))}
        </select>
      </div>

      {/* Wybrana data */}
      {selectedMonth && selectedDay && (
        <div className="flex flex-col">
          <p className="mt-4 text-gray-400">
            Selected:{" "}
            <span className="font-bold text-white">
              {selectedDay} {selectedMonth}
            </span>
          </p>
          { showTables ? "" :
            <button onClick={()=>checkTable(true)} className="py-2 px-4 bg-neutral-600 rounded-lg my-8 hover:bg-neutral-500">Check tables</button>
          }
        </div>
      )}
    </div>
  );
}
