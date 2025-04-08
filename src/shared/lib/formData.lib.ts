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