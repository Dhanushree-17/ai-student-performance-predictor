* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #eef4ff, #f7f7ff);
  color: #222;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px 60px;
}

.header {
  text-align: center;
  margin-bottom: 25px;
}

.header h1 {
  margin-bottom: 8px;
  color: #1b2d5c;
}

.header p {
  margin: 0;
  color: #55607a;
}

.layout {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 20px;
  margin-bottom: 25px;
}

.card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.08);
  padding: 25px;
}

.form-card h2,
.result-card h2,
.table-card h2 {
  margin-top: 0;
  color: #183b7a;
}

.grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(220px, 1fr));
  gap: 18px;
}

label {
  display: flex;
  flex-direction: column;
  font-weight: 600;
  color: #2d3f67;
  gap: 8px;
}

input {
  padding: 12px 14px;
  font-size: 1rem;
  border: 1px solid #d7def0;
  border-radius: 10px;
  background: #f9fbff;
}

button {
  margin-top: 20px;
  width: 100%;
  padding: 14px 20px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #2d63d8, #4b8ef7);
  color: #fff;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease;
}

button:hover {
  transform: translateY(-1px);
}

.result-box {
  min-height: 220px;
  padding: 18px;
  border-radius: 12px;
  background: #f5f8ff;
  border: 1px solid #dfe9ff;
}

.result-box.empty {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #64739a;
}

.result-box h3 {
  margin-top: 0;
  font-size: 1.5rem;
  color: #1d3d78;
}

.metric {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid #e3eaf7;
}

.metric:last-child {
  border-bottom: none;
}

.metric strong {
  color: #234b97;
}

.table-card table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.table-card th,
.table-card td {
  text-align: left;
  padding: 12px 10px;
  border-bottom: 1px solid #e9edf5;
}

.table-card th {
  background: #eef4ff;
  color: #244b98;
}

@media (max-width: 768px) {
  .layout,
  .grid {
    grid-template-columns: 1fr;
  }
}
