/** @jsx jsx */
import jsx from '../../jsx';
import { lazy } from 'react';
import Layout from './Layout';
import { useThemeUI } from 'theme-ui';
import { Div } from '../../elements';

const Content = lazy(() => import('!babel-loader!mdx-loader!./Bio.mdx'));

function Bio({ ...props }) {
  const { theme } = useThemeUI();
  return (
    <Layout>
      <Div dir="rtl" fontFamily={theme.typefaces.helvetica}>
        <Content />
      </Div>
    </Layout>
  );
}

export default Bio;
