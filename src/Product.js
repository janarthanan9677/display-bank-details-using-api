import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Product.css';

const Product = () => {
  const [employees, setEmployees] = useState([]);
  const [form, setForm] = useState({ id: '', name: '', salary: '', age: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('https://dummy.restapiexample.com/api/v1/employees');
      setEmployees(response.data.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await axios.put(`https://dummy.restapiexample.com/api/v1/update/${form.id}`, form);
    } else {
      await axios.post('https://dummy.restapiexample.com/api/v1/create', form);
    }
    fetchEmployees();
    setForm({ id: '', name: '', salary: '', age: '' });
    setIsEditing(false);
  };

  const handleEdit = (employee) => {
    setForm(employee);
    setIsEditing(true);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`);
    fetchEmployees();
  };

  return (
    <div className="product">
      <h1>Employee Management</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="salary"
          placeholder="Salary"
          value={form.salary}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleInputChange}
          required
        />
        <button type="submit">{isEditing ? 'Update' : 'Add'}</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.employee_name}</td>
              <td>{employee.employee_salary}</td>
              <td>{employee.employee_age}</td>
              <td>
                <button onClick={() => handleEdit(employee)}>Edit</button>
                <button onClick={() => handleDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Product;
