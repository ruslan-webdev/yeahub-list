import { createBrowserRouter } from "react-router-dom";

import AppLayout from "@/app/layouts/AppLayout";
import { QuestionPage } from "@/pages/question";
import { QuestionsPage } from "@/pages/questions";

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
