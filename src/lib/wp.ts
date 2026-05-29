import { GraphQLClient } from 'graphql-request';

const API_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://panel.fennixmedya.com/graphql';

export const wpClient = new GraphQLClient(API_URL);
