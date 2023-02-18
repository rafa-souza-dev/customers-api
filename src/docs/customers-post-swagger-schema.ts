export const customersPostSwaggerSchema = {
    schema: {
        description: 'post customer data',
        tags: ['customer'],
        body: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            cpf: { type: 'string' },
            birth_date: { type: 'string' },
          }
        },
        response: {
          201: {
            description: 'Success response',
            type: 'object',
            properties: {
              message: { type: 'string' }
            }
          },
          422: {
            description: 'Data validation error',
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
          400: {
            description: 'Customer already exists error',
            type: 'object',
            properties: {
              message: { type: 'string' }
            }
          },
          500: {
            description: 'Unexpected error',
          }
        },
    }
}
