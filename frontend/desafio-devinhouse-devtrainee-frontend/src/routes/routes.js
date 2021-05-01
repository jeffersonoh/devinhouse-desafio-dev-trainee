import { BrowserRouter, Routes, Route } from "react-router-dom";

import InitialPage from "../pages/InitialPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ExamListPage from "../pages/ExamListPage";
import NotFoundPage from "../pages/NotFoundPage";
import ScheduleExamPage from "../pages/ScheduleExamPage";
import RegisterPatientsPage from "../pages/RegisterPatientsPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/exames" element={<ExamListPage />} />
        <Route
          path="/agendamento/cadastrar/:id/:name"
          element={<ScheduleExamPage />}
        />
        <Route path="/paciente/cadastrar" element={<RegisterPatientsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
