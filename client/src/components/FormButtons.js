const FormButtons = ({ submitText, onCancel }) => {
  return (
    <div className="actions form-actions">
      <button type="submit">{submitText}</button>
      <button type="button" onClick={onCancel}>Cancel</button>
    </div>
  )
}

export default FormButtons;