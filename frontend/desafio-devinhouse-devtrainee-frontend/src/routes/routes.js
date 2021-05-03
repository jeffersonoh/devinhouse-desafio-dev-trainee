import { BrowserRouter, Routes, Route } from "react-router-dom";

import InitialPage from "../pages/InitialPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import ExamListPage from "../pages/ExamListPage";
import NotFoundPage from "../pages/NotFoundPage";
import ScheduleExamPage from "../pages/ScheduleExamPage";
import RegisterPatientsPage from "../pages/RegisterPatientsPage";
import ListScheduledExamsPage from "../pages/ListScheduledExamsPage";
import PatientsListPage from "../pages/PatientsListPage";
import UpdatePatientPage from "../pages/UpdatePatientPage";
import UpdadeScheduledExamPage from "../pages/UpdadeScheduledExamPage";

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
        <Route
          path="/agendamento/listar"
          element={<ListScheduledExamsPage />}
        />
        <Route path="/paciente/listar" element={<PatientsListPage />} />
        <Route path="/paciente/atualizar" element={<UpdatePatientPage />} />
        <Route
          path="/agendamento/atualizar"
          element={<UpdadeScheduledExamPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
