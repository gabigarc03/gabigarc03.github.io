import { useRoute, ErrorBoundary, lazy } from 'preact-iso';
import { Portfolio } from '../../../../shared/data/portfolio';
import NotFound from '../NotFound';

export default function PortfolioPage() {
  const { type, project } = useRoute().params;
  const isValidRoute = () => {
    return (
      Portfolio.find(proj => {
        return proj.href === `/tech/${type}/${project}`;
      }) != undefined
    );
  };
  const componentName = () => {
    const linkArray = project.split('-');
    return linkArray.reduce((str, substr) => {
      return `${str}${substr[0].toUpperCase()}${substr
        .substring(1)
        .toLowerCase()}`;
    }, '');
  };

  if (!isValidRoute()) {
    return (
      <ErrorBoundary onError={e => console.error(e)}>
        <NotFound />
      </ErrorBoundary>
    );
  }

  const Component = lazy(() => import(`./${type}/${componentName()}`));

  return (
    <ErrorBoundary onError={e => console.error(e)}>
      <Component />
    </ErrorBoundary>
  );
}
