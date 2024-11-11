import { getRadiografias, getRadiologies } from "@/src/services/apiService";
import { RecordModel } from "pocketbase";
import React, { useEffect, useState } from "react";
function convertirFechaCorta(fechaLarga: Date) {
  const fecha = new Date(fechaLarga); // Asegura que la fecha sea un objeto Date

  // Formatear día, mes y año
  const dia = fecha.getDate().toString().padStart(2, "0"); // Asegura que el día tenga 2 dígitos
  const mes = (fecha.getMonth() + 1).toString().padStart(2, "0"); // Mes empieza en 0
  const año = fecha.getFullYear();

  // Formatear hora y minutos
  const hora = fecha.getHours().toString().padStart(2, "0");
  const minutos = fecha.getMinutes().toString().padStart(2, "0");

  // Devolver el formato corto "dd/mm/yyyy, hh:mm"
  return `${dia}/${mes}/${año}, ${hora}:${minutos}`;
}
export const TableRadiographies = () => {
  const [radiologies, setRadiologies] = useState<RecordModel[]>([]);
  const [filterName, setFilterName] = useState('');
  const [applyFilter,setApplyFilter] = useState(false);
  const [filters,setFilters] = useState({});
  
  
  // const [nameFilter, setNameFilter] = useState('')
  // const [dateFilter, setDateFilter] = useState<Date | undefined>(undefined)
  // console.log(radiologies)
  //   const filteredRadiologies = radiologies.filter(radiology =>
  //     radiology.patientName.toLowerCase().includes(nameFilter.toLowerCase()) &&
  //     (!dateFilter || radiology.date.toDateString() === dateFilter.toDateString())
  //   )

  useEffect(() => {
    getRads();
  }, []);

  const getRads = async () => {
    // console.log(filters)
    const data = await getRadiologies();
    setRadiologies(data);
  };
//   const handleFilterChange = (e) => {
//     setFilterName(e.target.value); // Actualiza el estado con el valor del input
//     setFilters((prevFilters)=>({
//         ...prevFilters,
//         [e.target.name]:e.target.value
//     }))
//   };
  return (
    <div className="space-y-4">
      {/* <input
        type="text"
        placeholder="Filtrar por nombre"
        name="name"
        value={filterName}
        onChange={handleFilterChange} // Cada cambio actualiza el estado
        style={{color:"black"}}
        onSubmit={()=>setApplyFilter(true)}
        onKeyDown={e=>{
            if(e.key === 'Enter'){
                // console.log("Enter")
                getRads(filters)
            }
        }}
      /> */}

      <table>
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Fecha</th>
            <th>Resolucion</th>
            <th>Confidencia</th>
          </tr>
        </thead>

        <tbody>
          {radiologies.map((radiology) => (
            <tr key={radiology.id}>
              <td>{radiology.expand!.patient.name}</td>
              <td>{convertirFechaCorta(radiology.created)}</td>
              <td>{radiology.label}</td>
              <td>{radiology.confidence}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
