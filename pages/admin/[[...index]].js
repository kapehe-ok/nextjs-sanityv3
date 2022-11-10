import { NextStudio } from 'next-sanity/studio';
import { createConfig } from 'sanity';
import { config } from '../../lib/sanity.config';

// create a config
const studioConfig = createConfig(config);

// export the page component
export default function StudioPage() {
  return <NextStudio config={studioConfig} />
}