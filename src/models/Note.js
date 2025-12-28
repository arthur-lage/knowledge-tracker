export const createNote = (data = {}) => {
    return {
        id: crypto.randomUUID(),
        itemId: null,
        title: "",
        body: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        ...data
    }
}