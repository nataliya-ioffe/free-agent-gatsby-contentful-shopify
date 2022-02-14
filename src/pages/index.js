import * as React from 'react';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  const products = data.products.nodes;

  return (
    <main>
      <title>Home Page</title>
      <h1>Rangle Swag Shop</h1>
      <p>Welcome!</p>

      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              {product.title}
              {product.images.map((image) => {
                return <img key={image.id} src={image.src} />;
              })}
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export const query = graphql`
  query AllProductsQuery {
    products: allShopifyProduct {
      nodes {
        id
        description
        title
        images {
          src
        }
      }
    }
  }
`;

export default IndexPage;
