import React, { useState } from "react";

// هذا هو المكون الرئيسي للتطبيق
function App() {
  // استخدام useState لإنشاء الحالة للمهام والنص المدخل للمهمة
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  // دالة لإضافة مهمة جديدة إلى قائمة المهام
  const addTask = () => {
    // التحقق من أن النص المدخل غير فارغ
    if (taskText.trim()) {
      // إضافة النص إلى قائمة المهام وتحديث الحالة
      setTasks([...tasks, taskText]);
      // إعادة تعيين النص المدخل إلى قيمة فارغة
      setTaskText("");
    }
  };

  // دالة لتحديث النص المدخل عند التغيير في حقل الإدخال

  return (
    <div>
      <h1>To-Do List</h1>
      {/* حقل الإدخال لإدخال نص المهمة وزر لإضافتها */}
      <input
        type="text"
        value={taskText}
        onChange={(e) => {
          setTaskText(e.target.value);
        }}
      />
      <button onClick={addTask}>Add Task</button>

      {/* عرض قائمة المهام */}
      <div>
        {tasks.map((task, index) => (
          // عرض كل مهمة في فقرة جديدة
          <p key={index}>{task}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
