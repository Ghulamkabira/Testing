// src/components/StudentList.js
import React, { useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', grade: 'A' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', grade: 'B' },
  ]);

  return (
    <div>
      <h2>Student List</h2>
      <table style={{ width: '100%', border: '1px solid black' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
