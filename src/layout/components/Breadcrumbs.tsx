// Breadcrumbs.tsx
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';

type BreadcrumbsProps = object;

const Breadcrumbs: React.FC<BreadcrumbsProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  return (
    <Breadcrumb spacing="8px" mt={55} separator={<BreadcrumbSeparator> / </BreadcrumbSeparator>} bg={"primary.bg"}p={4}>
      {pathSegments.map((segment, index) => (
        <BreadcrumbItem key={index}>
          <BreadcrumbLink
            onClick={() => navigate(`/${pathSegments.slice(0, index + 1).join('/')}`)}
            style={{
              color: index === pathSegments.length - 1 ? 'inherit' : 'grey',
              cursor: index === pathSegments.length - 1 ? 'pointer' : 'default',
              fontWeight: 'bold'
            }}
          >
            {segment.charAt(0).toUpperCase() + segment.slice(1)}
          </BreadcrumbLink>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>

  );
};

export default Breadcrumbs;
