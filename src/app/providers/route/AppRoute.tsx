import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/app/layouts/AppLayout";
import QuestionsPage from "@/pages/question/questionsPage";
import QuestionPage from "@/pages/question/questionPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <QuestionsPage />,
      },
      {
        path: "/questions/public-questions/:id",
        element: <QuestionPage />,
      },
    ],
  },
]);

export default router;
