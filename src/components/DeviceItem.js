import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { animated } from 'react-spring';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Container = styled(animated.div)`
  .card {
    border: none;
    box-shadow: none;
  }
  .card-content {
    padding: 1rem 0;
  }
  .card-image {
    min-height: 241px;
  }
  .image.is-4by5 {
    padding-top: 0;
  }
`;

const Image = styled(Img)`
  object-fit: cover;
`;

const DeviceItem = ({ item, styles }) => {
  return (
    <Container className="column is-one-quarter" style={styles}>
      <div className="card">
        <Link to={`/${item.vendor.slug.current}/${item.slug.current}`}>
          <div className="card-image">
            {item.featuredImage ? (
              <Image fluid={item.featuredImage.asset.fluid} />
            ) : (
              <img
                src="https://bulma.io/images/placeholders/1280x960.png"
                alt="Placeholder image"
              />
            )}
          </div>
        </Link>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="subtitle is-6">
                <Link to={`/product/${item.slug.current}`}>{item.title}</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

DeviceItem.propTypes = {
  styles: PropTypes.object.isRequired,
};

export default DeviceItem;