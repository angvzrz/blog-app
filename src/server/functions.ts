import { Tag } from '@prisma/client';
import axios from 'axios';

export async function getTags() {
  try {
    const tags = await axios.get<Tag[]>('/api/tags');
    return tags.data;
  } catch (error) {
    throw new Error(`could not fetch tags: ${error}`);
  }
}
