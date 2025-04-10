import { useState } from "react";

const divisions = ["CS5", "ET1"];
const rollNumberRanges = {
  CS5: { start: 1, end: 92 },
  ET1: { start: 1, end: 103 },
};

const setLinks = {
  A: "https://drive.google.com/file/d/1Q2XfUlM6695H9OkyYag9RDD9NQPC1lsy/view?usp=sharing",
  B: "https://drive.google.com/file/d/1P2p26o_0-apeRcTacfTxPyNy7Cfp-qo_/view?usp=sharing",
};

// Mapping roll numbers to Set A or Set B
const rollSetMap = {
  "CS5-01": "B",
  "CS5-02": "A",
  "CS5-03": "A",
  "CS5-04": "A",
  "CS5-05": "A",
  "CS5-06": "B",
  "CS5-07": "B",
  "CS5-08": "A",
  "CS5-09": "A",
  "CS5-10": "B",
  "CS5-11": "A",
  "CS5-12": "A",
  "CS5-13": "A",
  "CS5-15": "B",
  "CS5-16": "B",
  "CS5-17": "A",
  "CS5-18": "B",
  "CS5-19": "A",
  "CS5-20": "A",
  "CS5-21": "A",
  "CS5-22": "B",
  "CS5-23": "B",
  "CS5-24": "A",
  "CS5-25": "B",
  "CS5-26": "B",
  "CS5-27": "B",
  "CS5-28": "B",
  "CS5-29": "B",
  "CS5-30": "A",
  "CS5-31": "B",
  "CS5-32": "B",
  "CS5-33": "B",
  "CS5-34": "A",
  "CS5-35": "A",
  "CS5-36": "B",
  "CS5-37": "B",
  "CS5-38": "A",
  "CS5-39": "A",
  "CS5-40": "B",
  "CS5-41": "A",
  "CS5-42": "A",
  "CS5-43": "B",
  "CS5-44": "A",
  "CS5-45": "B",
  "CS5-46": "B",
  "CS5-47": "A",
  "CS5-48": "B",
  "CS5-49": "B",
  "CS5-50": "B",
  "CS5-51": "B",
  "CS5-52": "B",
  "CS5-53": "A",
  "CS5-54": "A",
  "CS5-55": "A",
  "CS5-56": "A",
  "CS5-57": "A",
  "CS5-58": "B",
  "CS5-59": "B",
  "CS5-60": "A",
  "CS5-61": "A",
  "CS5-62": "B",
  "CS5-63": "B",
  "CS5-64": "B",
  "CS5-65": "B",
  "CS5-66": "B",
  "CS5-67": "B",
  "CS5-68": "B",
  "CS5-69": "B",
  "CS5-70": "A",
  "CS5-71": "B",
  "CS5-72": "B",
  "CS5-73": "A",
  "CS5-75": "B",
  "CS5-76": "A",
  "CS5-77": "A",
  "CS5-78": "B",
  "CS5-79": "A",
  "CS5-80": "B",
  "CS5-81": "A",
  "CS5-82": "A",
  "CS5-83": "A",
  "CS5-84": "B",
  "CS5-85": "B",
  "CS5-86": "B",
  "CS5-87": "A",
  "CS5-88": "B",
  "CS5-89": "A",
  "CS5-90": "A",
  "CS5-91": "A",
  "CS5-92": "A",
  "ET1-01": "B",
  "ET1-02": "A",
  "ET1-03": "A",
  "ET1-04": "B",
  "ET1-05": "B",
  "ET1-06": "B",
  "ET1-07": "B",
  "ET1-08": "B",
  "ET1-09": "B",
  "ET1-10": "B",
  "ET1-11": "B",
  "ET1-14": "B",
  "ET1-15": "B",
  "ET1-16": "A",
  "ET1-17": "B",
  "ET1-18": "B",
  "ET1-19": "A",
  "ET1-20": "A",
  "ET1-21": "B",
  "ET1-22": "A",
  "ET1-23": "B",
  "ET1-25": "B",
  "ET1-26": "A",
  "ET1-27": "B",
  "ET1-28": "B",
  "ET1-29": "B",
  "ET1-30": "B",
  "ET1-31": "A",
  "ET1-32": "B",
  "ET1-33": "B",
  "ET1-35": "B",
  "ET1-36": "B",
  "ET1-37": "B",
  "ET1-38": "B",
  "ET1-39": "B",
  "ET1-40": "A",
  "ET1-42": "A",
  "ET1-43": "A",
  "ET1-44": "B",
  "ET1-45": "B",
  "ET1-46": "B",
  "ET1-47": "A",
  "ET1-48": "B",
  "ET1-49": "B",
  "ET1-50": "B",
  "ET1-51": "B",
  "ET1-52": "A",
  "ET1-53": "B",
  "ET1-54": "B",
  "ET1-55": "A",
  "ET1-56": "B",
  "ET1-57": "A",
  "ET1-58": "B",
  "ET1-60": "A",
  "ET1-61": "A",
  "ET1-62": "B",
  "ET1-63": "B",
  "ET1-64": "B",
  "ET1-65": "B",
  "ET1-66": "B",
  "ET1-67": "B",
  "ET1-68": "B",
  "ET1-70": "A",
  "ET1-71": "B",
  "ET1-72": "A",
  "ET1-73": "B",
  "ET1-74": "A",
  "ET1-75": "B",
  "ET1-76": "B",
  "ET1-78": "A",
  "ET1-79": "A",
  "ET1-80": "B",
  "ET1-81": "A",
  "ET1-82": "A",
  "ET1-83": "B",
  "ET1-84": "B",
  "ET1-85": "A",
  "ET1-86": "A",
  "ET1-87": "B",
  "ET1-88": "B",
  "ET1-89": "B",
  "ET1-90": "B",
  "ET1-91": "B",
  "ET1-92": "A",
  "ET1-93": "B",
  "ET1-94": "A",
  "ET1-95": "B",
  "ET1-96": "A",
  "ET1-97": "B",
  "ET1-98": "B",
  "ET1-99": "B",
  "ET1-100": "A",
  "ET1-101": "B",
  "ET1-102": "B",
  "ET1-103": "B",
};

const App = () => {
  const [division, setDivision] = useState("");
  const [rollNumber, setRollNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const key = `${division}-${rollNumber.padStart(2, "0")}`;
    const assignedSet = rollSetMap[key];
    if (assignedSet) {
      window.open(setLinks[assignedSet], "_blank");
    } else {
      alert("No set assigned to this roll number.");
    }
  };

  const rollNumbers = division
    ? Array.from(
        {
          length:
            rollNumberRanges[division].end -
            rollNumberRanges[division].start +
            1,
        },
        (_, i) => (rollNumberRanges[division].start + i).toString()
      )
    : [];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-900 to-gray-900 text-white p-6">
      <div className="bg-gray-800 p-8 rounded-xl w-[450px] text-center shadow-2xl shadow-slate-400 border border-gray-700">
        <h1 className="text-3xl font-extrabold mb-6 text-slate-100">
          Dataset for Experiment 1
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-lg font-semibold">
            Select Your Division:
          </label>
          <select
            value={division}
            onChange={(e) => {
              setDivision(e.target.value);
              setRollNumber("");
            }}
            className="w-full p-3 border border-gray-500 bg-gray-700 rounded focus:ring-2 focus:ring-slate-100"
            required
          >
            <option value="">Select Batch</option>
            {divisions.map((div) => (
              <option key={div} value={div} className="bg-gray-800">
                {div}
              </option>
            ))}
          </select>

          <label className="block text-lg font-semibold">
            Enter Your Roll Number:
          </label>
          <select
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
            className="w-full p-3 border border-gray-500 bg-gray-700 rounded focus:ring-2 focus:ring-slate-100"
            required
            disabled={!division}
          >
            <option value="">Select Roll Number</option>
            {rollNumbers.map((num) => (
              <option key={num} value={num} className="bg-gray-800">
                {num}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="w-full bg-slate-100 text-gray-900 font-bold py-3 rounded-lg hover:bg-slate-300 transition transform hover:scale-105 disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            Get Your Question
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;
