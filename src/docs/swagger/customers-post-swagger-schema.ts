export const customersPostSwaggerSchema = {
  description: 'post customer data',
  tags: ['customer'],
  body: {
    type: 'object',
    properties: {
      name: { type: 'string' },
      cpf: {
        type: 'string',
        description: 'You must enter a valid CPF. It can have mask, for example 995.368.440-52 or without mask 99536844052'
      },
      birth_date: {
        type: 'string',
        description: 'The birthday date needs to have year, month and day, so the standard format to inform this field is yyyy-MM-dd. Example: 2002-06-22'
      },
    }
  },
  response: {
    201: {
      description: 'Success response',
      type: 'null'
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
    }
  },
}
