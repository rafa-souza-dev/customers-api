export const customersGetSwaggerSchema = {
  description: 'get customers with pagination',
  tags: ['customer'],
  query: {
      type: 'object',
      properties: {
        page: { type: 'string' },
        limit: { type: 'string' },
      }
  },
  response: {
    200: {
      description: 'Success response',
      type: 'object',
      properties: {
        count: { type: 'number' },
        page: { type: 'number' },
        limit: { type: 'number' },
        previous: { type: ['null', 'string'] },
        next: { type: ['null', 'string'] },
        results: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string' },
              name: { type: 'string' },
              cpf: { type: 'string' },
              birth_date: { type: 'string' }
            }
          }
        },
      }
    },
    422: {
      description: 'Query params validation error',
      type: 'object',
      properties: {
        errors: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              code: { type: "string" },
              expected: { type: "string" },
              received: { type: "string" },
              path: {
                type: 'array',
                items: {
                  type: "string"
                }
              },
              message: { type: "string" }
            }
          },
        }
      }
    },
  },
}
