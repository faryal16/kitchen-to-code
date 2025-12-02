import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@docusaurus/theme-classic/lib/theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@docusaurus/theme-classic/lib/theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle"></p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div className="container">
          <div className={clsx('row', styles.buttons)}>
            <div className="col text--center">
              <Link
                className="button button--secondary button--lg"
                to="/blog">
                Go to Blog
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
