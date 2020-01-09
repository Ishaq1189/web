import React from 'react';
import { graphql } from 'gatsby';

import config from '../utils/config';
import Seo from './Seo';
import Layout from './Layout';
import Heading from './Heading';

export const vendorQuery = graphql`
  query VendorByPath($slug: String!) {
    sanityVendor(slug: { current: { eq: $slug } }) {
      id
      title
      slug {
        current
      }
    }
    allSanityDevice(filter: { vendor: { slug: { current: { eq: $slug } } } }) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          vendor {
            slug {
              current
            }
          }
        }
      }
    }
  }
`;

export default class VendorView extends React.Component {
  render() {
    const { data } = this.props;
    const vendor = data.sanityVendor;
    const devices = data.allSanityDevice.edges;
    console.log('data', data);

    return (
      <Layout>
        <Seo
          title=""
          description=""
          // url={`${config.siteUrl}/page/${page.slug}`}
        />
        <div className="section">
          <div className="container">
            <Heading>Vendor: {vendor.title}</Heading>
            <ul>
              {devices.map(({ node: device }) => (
                <li key={device.id}>{device.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}