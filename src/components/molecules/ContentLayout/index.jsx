import Grid from 'components/atoms/Grid';
import Heading from 'components/atoms/Heading';
import React from 'react';
import { ContentLayoutHolder, ContentHead } from './ContentLayout.styles';

function ContentLayout({ title, buttons, children }) {
  return (
    <ContentLayoutHolder>
      <ContentHead>
        <Heading level={2}>{title}</Heading>
        <Grid xs={2} gap={20}>
          {buttons ?? null}
        </Grid>
      </ContentHead>
      {children}
    </ContentLayoutHolder>
  );
}

export default ContentLayout;
