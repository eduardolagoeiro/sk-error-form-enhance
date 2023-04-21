import { error } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async () => {
    throw error(500, 'something went wrong');
  },
};
