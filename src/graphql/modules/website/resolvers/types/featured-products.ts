import type { ResolverProps } from '@composabase/sdk'
import { client, gql } from '@composabase/client'

export default async function Resolver({ root }: ResolverProps) {
  const { isFeaturedShown } = root

  if (!isFeaturedShown) {
    return []
  }

  const query = gql(`
    query featuredProducts ($take: Int!) {
      commerce {
        findManyProduct (
          take: $take
          where: {
            isFeatured: {
              equals: true
            }
          }
        ) {
          id
          stock
        }
      }
    }
  `)

  const { data, error } = await client.query(query, { take: 5 });

  if (error) {
    throw error
  }

  if (!data) {
    return []
  }

  const { commerce: { findManyProduct } } = data

  return findManyProduct
}
