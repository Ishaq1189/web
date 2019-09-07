import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import HomeBanner from '../components/HomeBanner';
import ProductsList from '../components/ProductsList';
import HomeAbout from '../components/HomeAbout';

export const query = graphql`
  query HomePageQuery {
    allSanityProduct {
      edges {
        node {
          id
          title
          slug {
            current
          }
          variant {
            color
            discountPrice
            price
            sku
            featuredImage {
              asset {
                fluid(maxWidth: 700) {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;

// export const indexQuery = graphql`
//   query Products {
//     allContentfulProduct(
//       filter: { status: { eq: "active" } }
//       sort: { fields: [listingOrder], order: ASC }
//     ) {
//       edges {
//         node {
//           id
//           title
//           slug
//           color
//           originalPrice
//           discountPrice
//           featuredImage {
//             title
//             sizes(maxWidth: 550) {
//               ...GatsbyContentfulSizes
//             }
//           }
//         }
//       }
//     }
//     contentfulHome {
//       homeSliderTitle
//       homeSliderSubTitle
//       homeSliderImage {
//         title
//         sizes(maxWidth: 550) {
//           ...GatsbyContentfulSizes
//         }
//       }
//       homeIntro {
//         homeIntro
//       }
//     }
//   }
// `;

const HomePage = ({ data }) => {
  console.log('data', data);
  const home = {};
  const products = data.allSanityProduct.edges;

  return (
    <Layout>
      <Seo
        title="Latest punjabi suits collection"
        description="Latest Punjabi Traditional Suits"
        url={config.siteUrl}
      />
      <HomeBanner data={home} />
      <ProductsList products={products} />
      <HomeAbout data={home} />
    </Layout>
  );
};

export default HomePage;
