import { useGetSkillsQuery } from "@/entities/skills";
import { useAppDispatch } from "@/shared/lib/hooks/useAppDispatch";
import SelectMenu from "@/shared/ui/selectMenu/SelectMenu";
import { setSkill } from "@/widgets/question/questionsFilters/model/filtersSlice";

function SkillsFilter() {
  const dispatch = useAppDispatch();
  const { data: skills, isLoading, error } = useGetSkillsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error || !skills) return <div>Error! Try again later.</div>;

  const items = skills.map(skill => ({
    id: skill.id,
    title: skill.title,
  }));

  function handleClickSkill(id: number) {
    dispatch(setSkill(id));
  }

  return <SelectMenu title="Навыки" items={items} onClick={handleClickSkill} />;
}

export default SkillsFilter;
