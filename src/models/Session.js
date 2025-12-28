export const createSession = (data = {}) => {
    return {
        id: crypto.randomUUID(),
        title: "",
        description: "",
        itemId: null,
        
        ...data
    }
}