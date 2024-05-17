'use client';

import {ErrorPage} from 'frontend/components/ErrorPage';

type Props = {
  error: Error;
  reset: () => void;
};

const Page = (props: Props) => <ErrorPage {...props} />;
export default Page;
