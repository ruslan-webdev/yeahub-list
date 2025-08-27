import type { AppDispatch } from "@/app/providers/store/AppStore";
import { useDispatch } from "react-redux";

export const useAppDispatch: () => AppDispatch = useDispatch;
