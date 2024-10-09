import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Navegue pelos médicos especialistas.</p>
      <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
        <button
          className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${
            showFilter ? "bg-primary text-white " : ""
          }`}
          onClick={() => setShowFilter((prev) => !prev)}
        >
          Filters
        </button>
        <div
          className={`flex flex-col gap-4 text-sm text-gray-600 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() =>
              speciality === "Médico geral"
                ? navigate("/doctors")
                : navigate("/doctors/Clínico Geral")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Médico geral" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Médico geral
          </p>
          <p
            onClick={() =>
              speciality === "Ginecologista"
                ? navigate("/doctors")
                : navigate("/doctors/Ginecologista")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Ginecologista" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Ginecologista
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologista"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologista")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Dermatologista" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Dermatologista
          </p>
          <p
            onClick={() =>
              speciality === "Pediatra"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatra")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Pediatra" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Pediatra
          </p>
          <p
            onClick={() =>
              speciality === "Neurologista"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologista")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Neurologista" ? "bg-indigo-100 text-black" : ""
            }`}
          >
            Neurologista
          </p>
          <p
            onClick={() =>
              speciality === "Gastroenterologista"
                ? navigate("/doctors")
                : navigate("/doctors/Gastroenterologista")
            }
            className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${
              speciality === "Gastroenterologista"
                ? "bg-indigo-100 text-black"
                : ""
            }`}
          >
            Gastroenterologista
          </p>
        </div>

        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt="" />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Disponível</p>
                </div>
                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
