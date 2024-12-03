import { useAppDispatch, useAppSelector } from '@redux';
import { setSearchText, setLocation, setDate, setTargetAudience } from '../model/filterSlice';
import { selectFilterState } from '../model/filterSelectors';
import { Input } from '@shared/formControls';

const FilterEvents: React.FC = () => {
  const dispatch = useAppDispatch();
  const { searchText, location, date, targetAudience } = useAppSelector(selectFilterState);

  return (
    <div className="flex">
      <Input
        type="text"
        placeholder="Search by title"
        value={searchText}
        onChange={(e) => dispatch(setSearchText(e.target.value))}
      />
      <Input
        type="text"
        placeholder="Search by location"
        value={location}
        onChange={(e) => dispatch(setLocation(e.target.value))}
      />
      <Input
        type="text"
        placeholder="Search by date"
        value={date}
        onChange={(e) => dispatch(setDate(e.target.value))}
      />
      <Input
        type="text"
        placeholder="Search by target audience"
        value={targetAudience}
        onChange={(e) => dispatch(setTargetAudience(e.target.value))}
      />
    </div>
  );
};

export default FilterEvents;
