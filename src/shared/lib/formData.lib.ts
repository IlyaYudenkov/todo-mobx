/**
 * Возвращает все данные из `formData`
 */
export const getFormData = (formData: FormData) => {
    const tempDataStorage: Record<string, any> = {}
    formData.forEach((value, key) => {
        tempDataStorage[key] = value
    })
    return tempDataStorage;
}

/**
 * Возвращает все данные которые указаны в форме
 * @param formRefCurrent - `HTMLFormElement`
 * @returns 
 */
export const getFormDataFromForm = (formRefCurrent: HTMLFormElement) => {
    return getFormData(new FormData(formRefCurrent));
}