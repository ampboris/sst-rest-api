import notes from '@sst-rest-api/core/notes';

export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify(notes),
  };
}