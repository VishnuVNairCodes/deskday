import "./FieldSet.css";

const FieldSet = ({ fieldName, fieldData }) => {
  return (
    <fieldset className="fieldset">
      <legend className="fieldset-legend">{fieldName}</legend>
      <input className="fieldset-input" value={fieldData} />
    </fieldset>
  );
};

export { FieldSet };
