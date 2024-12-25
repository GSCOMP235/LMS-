import React, { useState } from "react";

const AdminDashboard = ({ courses, setCourses }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      setCourses(
        courses.map((course) =>
          course.id === editingId ? { ...formData, id: editingId } : course
        )
      );
      setEditingId(null);
    } else {
      setCourses([...courses, { ...formData, id: Date.now() }]);
    }
    setFormData({ title: "", description: "", price: "" });
  };

  const handleEdit = (course) => {
    setFormData(course);
    setEditingId(course.id);
  };

  const handleDelete = (id) => {
    setCourses(courses.filter((course) => course.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <form onSubmit={handleSubmit} className="mb-8 space-y-4">
        <div>
          <input
            type="text"
            placeholder="Course Title"
            className="w-full p-2 border rounded"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            required
          />
        </div>
        <div>
          <textarea
            placeholder="Course Description"
            className="w-full p-2 border rounded"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            required
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="Price"
            className="w-full p-2 border rounded"
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {editingId ? "Update Course" : "Add Course"}
        </button>
      </form>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="border rounded p-4">
            <h3 className="font-bold">{course.title}</h3>
            <p className="text-gray-600">{course.description}</p>
            <p className="text-green-600">Lkr{course.price}</p>
            <div className="mt-4 space-x-2">
              <button
                onClick={() => handleEdit(course)}
                className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(course.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
