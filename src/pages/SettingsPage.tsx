import { useEffect } from 'react';

import useBrowserControls from '@/hooks/useBrowserControls';

import { Container } from '@/components/Container';
import { Section } from '@/components/Section';
import { Typography } from '@/components/Typography';
import { CommonPageLayout } from '@/layout';
import { LoadSpinner } from '@/components/LoadSpinner';

const SettingsPage = () => {
  const { setDocumentTitle } = useBrowserControls();

  useEffect(() => {
    setDocumentTitle('Mizuhiki | Settings');
  }, [setDocumentTitle]);

  return (
    <CommonPageLayout>
      <Section>
        <Container>
          <LoadSpinner></LoadSpinner>

          <Typography variant="h4" align="center">
            Common
          </Typography>

          <Typography variant="h4" align="center">
            About
          </Typography>
        </Container>
      </Section>
    </CommonPageLayout>
  );
};

export default SettingsPage;
