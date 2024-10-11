import { createModule } from "@composabase/sdk"

const website = () => {
  const module = createModule('website')

  module.type('Page', {
    featuredProducts: {
      definition: {
        selectionSet: `{
          isFeaturedShown
        }`,
        type: module.list(module.scalar('Product')),
      },
      resolver: 'featured-products'
    }
  })

  return module
}

export default website()
