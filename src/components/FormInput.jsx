function FormInput({ className, labelFor, labelText, inputType, inputId }) {
    return (
        <div className={`input-${className}`}>
            <label htmlFor={labelFor}>{labelText}</label>
            <input type={inputType} id={inputId} />
        </div>
    )
}
export default FormInput