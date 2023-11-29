interface CenteredLayoutProps {
  children: React.ReactNode;
}

const CenteredLayout = ({ children }:CenteredLayoutProps):JSX.Element => (
  <div className="flex w-full items-center justify-center min-h-screen bg-gray-100">
    {children}
  </div>
);
  
  export default CenteredLayout;
