export const createLearningItem = (data = { }) => {
    return {
        id: crypto.randomUUID(),
        itemId: "",
        title: "",
        type: "",
        status: "",
        progress: 0,
        createdAt: new Date().toISOString(),
        lastStudiedAt: null,
        ...data
    }
} 