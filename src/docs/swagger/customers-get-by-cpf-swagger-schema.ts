export const customersGetByCPFSwaggerSchema = {
    schema: {
        description: 'get customer by cpf',
        tags: ['customer'],
        params: {
            type: 'object',
            properties: {
              cpf: { type: 'string' }
            }
        },
        response: {
          200: {
            description: 'Success response',
            type: 'object',
            properties: {
              customer: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    name: { type: 'string' },
                    cpf: { type: 'string' },
                    birth_date: { type: 'string' }
                }
              }
            }
          },
          422: {
            description: 'Params validation error',
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
          404: {
            description: 'Customer not found error',
            type: 'object',
            properties: {
              message: { type: 'string' }
            }
          }
        },
    }
}
