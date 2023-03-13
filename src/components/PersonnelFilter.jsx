import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const PersonnelFilter = ({ changeHandler }) => {
  const [positions, setPositions] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/personnelPosotion`)
      .then((res) => setPositions(res.data))
      .catch((err) => console.log(err.message));
  }, []);
  return (
    <div className="flex flex-col gap-8">
    <div className="flex flex-col">
        <label for="level" className=" text-primary-light-green mb-2">
          سطح پرسنل
        </label>
        <select
          name="level"
          id="level"
          className="bg-transparent bg-primary-dark-green rounded focus:outline-none container mx-auto w-10 p-2"
          onChange={(e) => changeHandler(e)}
        >
          <option value="">همه</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
      </div>
      
      {positions && (
        <div className="flex flex-col flex-1">
          <p for="level" className=" text-white mb-2">
            سمت شغلی
          </p>
          <input
            name="position"
            id="position"
            list="positionn"
            className="bg-transparent w-40 bg-primary-dark-green rounded focus:outline-none p-2"
            onChange={(e) => changeHandler(e)}
          />
          <datalist id="positionn">
            <option value="">همه</option>
            {positions.map((item) => (
              <option value={item.position}>{item.position}</option>
            ))}
          </datalist>
        </div>
      )}
      </div>

  );
};

export default PersonnelFilter;
