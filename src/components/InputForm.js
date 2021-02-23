const InputForm = ({
  label,
  onChange,
  value,
  name,
  error,
  errorType,
  errorMessage,
  type,
  onBlur,
  onBlurStatus,
  errorStatus,
  className,
  dispatched,
  saveClick,
}) => {
  return (
    <div className="input-type">
      <label>{label}</label>
      <div className="input-label">
        <input
          className={
            saveClick
              ? errorStatus
                ? error === undefined
                  ? ""
                  : error.details[0].path[0] === label
                  ? "error-active"
                  : ""
                : ""
              : ""
          }
          type={type}
          id={name}
          name={name}
          value={value}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
        ></input>
      </div>
      <div className="display-error">
        {/* {errorStatus ? error === undefined ? "" : <h4>{error.message}</h4> : ""} */}
        {saveClick ? (
          errorStatus ? (
            error === undefined ? (
              ""
            ) : error.details[0].path[0] === label ? (
              <h4>{error.message}</h4>
            ) : (
              ""
            )
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default InputForm;
