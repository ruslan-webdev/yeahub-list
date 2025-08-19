import { useEffect, useState } from "react";

import styles from "./SearchFilter.module.css";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { setTitle } from "@/widgets/question/questionFilters/model/filtersSlice";
import { useDebounce } from "@/shared/lib/hooks/useDebounce";
import { DEFAULT_INPUT_VALUE } from "@/shared/config/constants";

function SearchFilter() {
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState(DEFAULT_INPUT_VALUE);
  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    dispatch(setTitle(debouncedSearchValue));
  }, [debouncedSearchValue]);

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }

  return <input onChange={handleChangeInput} className={styles.input} type="search" placeholder="Введите запрос..." />;
}

export default SearchFilter;
