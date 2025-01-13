import Booking from "../BookingTable/Booking";
import { Toast } from "../BookingTable/Toast";
import { useState } from "react";


export default function Book() {
  const [showTables, setShowTables] = useState<boolean>(false);
  const [selectedTableId, setSelectedTableId] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const tables = [
    { id: 1, seats: 2, status: "available" },
    { id: 2, seats: 4, status: "available" },
    { id: 3, seats: 6, status: "reserved" },
    { id: 4, seats: 4, status: "available" },
    { id: 5, seats: 2, status: "reserved" },
  ];

  const checkTable = (state: boolean) => {
    if (state) {
      setTimeout(() => {
        setShowTables(state);
      }, 1000);
    } else {
      setShowTables(state);
    }
  };

  const handleTableClick = (tableId: number) => {
    if (selectedTableId === tableId) {
      setSelectedTableId(null); // Deselect if already selected
    } else {
      setSelectedTableId(tableId); // Select the clicked table
      console.log(tableId);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedTableId) {
      setToastMessage(`Reservation for Table ${selectedTableId} sent!`);
    } else {
      setToastMessage("Please select a table before submitting.");
    }
  };

  return (
    <section id="book" className="py-24 bg-neutral-900 text-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-16">Book a Table</h2>
        <div className="flex flex-col md:flex-row items-start space-y-12 md:space-y-0 md:space-x-12">
          {/* Booking form */}
          <div id="calendar" className="w-full md:w-1/2 flex flex-col items-center mx-auto">
            <div className="w-1/2">
              <Booking checkTable={checkTable} showTables={showTables} />
            </div>
          </div>

          {/* Available tables */}
          {showTables && (
            <div id="tables" className="w-full md:w-1/2 px-16">
              <ul className="space-y-4">
                {tables.map((table) => (
                  <li
                    key={table.id}
                    className={`p-4 rounded-lg shadow-md cursor-pointer ${
                      table.status === "available"
                        ? "bg-gray-800 border border-white"
                        : "bg-gray-800 opacity-75"
                    } ${
                      selectedTableId === table.id
                        ? "bg-stone-500 border-stone-400"
                        : ""
                    }`}
                    onClick={
                      table.status === "available"
                        ? () => handleTableClick(table.id)
                        : undefined
                    }
                    style={table.status === "reserved" ? { cursor: "not-allowed" } : {}}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">Table {table.id}</span>
                      <span className="text-sm">Seats: {table.seats}</span>
                      <span
                        className={`text-xs font-semibold ${
                          table.status === "available"
                            ? "text-green-100"
                            : "text-red-100"
                        }`}
                      >
                        {table.status === "available" ? "Available" : "Reserved"}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Reservation Form */}
        {showTables && 

          <div className="mt-16 w-3/5 mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-center">Send reservation</h3>
            <form
              onSubmit={handleSubmit}
              className="flex flex-wrap md:flex-nowrap gap-4 items-center justify-between"
            >
              <input
                type="text"
                placeholder="First Name"
                className="w-full md:w-1/5 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full md:w-1/5 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full md:w-1/5 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full md:w-1/5 px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="w-full md:w-1/5 px-4 py-2 rounded-lg bg-stone-600 text-white hover:bg-stone-700"
              >
                Submit
              </button>
            </form>
          </div>
        }
      </div>
      {/* Toast */}
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage(null)} />}
    </section>
  );
}
