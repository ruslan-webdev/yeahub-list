import { useGetSpecializationsQuery } from "@/entities/specializations";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/lib/hooks/useAppSelector";
import SelectMenu from "@/shared/ui/selectMenu/SelectMenu";
import { resetSpecialization, setSpecialization } from "@/widgets/question/questionsFilters/model/filtersSlice";

function SpecializationFilter() {
  const dispatch = useAppDispatch();
  const currentSpecialization = useAppSelector(state => state.filters.specialization);
  const { data: specializations, isLoading, error } = useGetSpecializationsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error || !specializations) return <div>Error! Try again later.</div>;

  const items = specializations.map(specialization => ({
    id: specialization.id,
    title: specialization.title,
  }));

  function handleClickSpecialization(id: number) {
    dispatch(currentSpecialization === id ? resetSpecialization() : setSpecialization(id));
  }

  return <SelectMenu title="Специализация" items={items} onClick={handleClickSpecialization} />;
}

export default SpecializationFilter;
