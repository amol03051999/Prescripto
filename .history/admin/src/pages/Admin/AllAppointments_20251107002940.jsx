import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const AllAppointment = () => {
  const { aToken, appointments, getAllAppointments } = useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllAppointments();
    }
  }, [aToken]);

  const gridColumns = "grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr]";

  return (
    <div className="w-full max-w-6xl m-5">
      <h1 className="mb-3 text-lg font-medium text-gray-800">
        All Appointments
      </h1>

      <div className="bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-auto">
        {/* Header */}
        <div
          className={`hidden sm:grid ${gridColumns} py-3 px-6 border-b bg-gray-50 font-medium`}
        >
          <p className="text-gray-700">#</p>
          <p className="text-gray-700">Patient</p>
          <p className="text-gray-700">Age</p>
          <p className="text-gray-700">Date & Time</p>
          <p className="text-gray-700">Doctor</p>
          <p className="text-gray-700">Fees</p>
          <p className="text-gray-700">Actions</p>
        </div>

        {/* Mobile Header - Visible on small screens */}
        <div className="sm:hidden p-4 bg-gray-50 border-b font-medium text-gray-700">
          Appointments List
        </div>

        {/* Appointments List */}
        {appointments.map((item, index) => (
          <div
            key={item._id || index}
            className={`
              sm:grid ${gridColumns} items-center
              flex flex-wrap gap-2 sm:gap-0
              py-3 px-6 border-b
              hover:bg-gray-50 transition-colors
              text-gray-600
            `}
          >
            <p className="max-sm:hidden">{index + 1}</p>
            <div className="flex items-center gap-2 min-w-[200px] sm:min-w-0">
              <img
                className="w-8 h-8 rounded-full object-cover"
                src={item.userData.image}
                alt={`${item.userData.name}'s profile`}
              />
              <p>{item.userData.name}</p>
            </div>
            {/* Add other appointment details here */}
          </div>
        ))}

        {/* Empty State */}
        {appointments.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            No appointments found
          </div>
        )}
      </div>
    </div>
  );
};

export default AllAppointment;
