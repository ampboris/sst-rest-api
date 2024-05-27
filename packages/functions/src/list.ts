import notes from '../../core/src/notes';

export async function handler() {
  return {
    statusCode: 200,
    body: JSON.stringify(notes),
  };
}