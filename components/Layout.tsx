import styled from 'styled-components';

export const LayoutStyled = styled.main`
  max-width: 1440px;
  width: 100%;
  padding: 4.375rem;
  margin: 0 auto;
`;

const Layout = ({ children }: React.PropsWithChildren<Record<never, any>>) => {
  return <LayoutStyled>{children}</LayoutStyled>;
};

export default Layout;
