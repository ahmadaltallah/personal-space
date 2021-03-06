/** @jsx jsx */
import jsx from '../../jsx';
import { lazy } from 'react';
import Layout from './Layout';

const Content = lazy(() => import('!babel-loader!mdx-loader!./SoyCuba.mdx'));

function SoyCuba({ ...props }) {
  return (
    <Layout>
      <Content />
    </Layout>
  );
}

export default SoyCuba;
