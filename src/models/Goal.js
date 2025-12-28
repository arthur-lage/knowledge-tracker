export function createGoal(data = {}) {
  return {
    id: crypto.randomUUID(),
    type: 'time',
    target: 0,
    period: 'month',
    scope: 'global',
    scopeValue: null,
    active: true,
    createdAt: new Date().toISOString(),
    ...data
  }
}