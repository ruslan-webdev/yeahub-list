import { useSelector, type TypedUseSelectorHook } from "react-redux";

import type { RootState } from "@/app/providers/store/AppStore";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;