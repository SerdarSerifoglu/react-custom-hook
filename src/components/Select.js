const Select = ({
  labelText,
  nameText,
  idValue,
  contentList = [],
  onChangeEvent,
}) => {
  return (
    <>
      <label htmlFor={nameText}>{labelText}</label>
      <select name={nameText} id={idValue} onChange={(e) => onChangeEvent(e)}>
        {contentList.length > 0 ? (
          contentList.map((e) => (
            <option key={e.id} value={e.id}>
              {e.name}
            </option>
          ))
        ) : (
          <option value=""></option>
        )}
      </select>
    </>
  );
};

export default Select;
