/*
 *
 * HomePage
 *
 */
/* eslint-disable */
import React, { memo, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import { auth, LoadingIndicatorPage } from 'strapi-helper-plugin';
import PageTitle from '../../components/PageTitle';
import { useModels } from '../../hooks';

import { ALink, Block, Container, LinkWrapper, P, Wave, Separator } from './components';

const HomePage = ({ history: { push } }) => {
  // Temporary until we develop the menu API
  const { collectionTypes, singleTypes, isLoading: isLoadingForModels } = useModels();

  if (isLoadingForModels) {
    return <LoadingIndicatorPage />;
  }

  return (
    <>
      <FormattedMessage id="HomePage.helmet.title">
        {title => <PageTitle title={title} />}
      </FormattedMessage>
      <Container className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <Block>
              <h1 style={{ marginBottom: "20px" }}>Klinik Online</h1>
              <h2 style={{ marginBottom: "25px" }}>Data Akurat Untuk Sukses Jualan Online di E-Commerce</h2>
            </Block>
          </div>
        </div>
      </Container>
    </>
  );
};

export default memo(HomePage);
