import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export default function HomepageFeatures(): ReactNode {
  const taglineContent = 'Witness the inspiring and transformative journey as homemakers seamlessly transition from adeptly managing households to profoundly mastering the intricate world of Artificial Intelligence. This compelling journey meticulously explores how their deeply ingrained organizational skills, meticulous attention to detail, and exceptional problem-solving abilities are uniquely and perfectly suited for the dynamic fields of AI development, innovative coding practices, and cutting-edge technological solutions. This not only unlocks unprecedented avenues for profound personal growth and continuous learning but also significantly contributes to broader societal advancements and technological innovation, showcasing their immense potential in shaping the future.';
  return (
    <section className={styles.features}>
      <div className={clsx(styles.homepageTaglineSection, 'text--center')}>
        <div className="container">
          <Heading as="h2" className={styles.taglineHeading}>
            <b>Empowering Housewives in the AI Revolution</b>
          </Heading>
          <p className={styles.taglineParagraph}>
            {taglineContent}
          </p>
        </div>
      </div>
    </section>
  );
}


