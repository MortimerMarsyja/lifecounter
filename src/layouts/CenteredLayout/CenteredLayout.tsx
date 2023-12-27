interface CenteredLayoutProps {
  children: React.ReactNode;
}

const CenteredLayout = ({ children }:CenteredLayoutProps):JSX.Element => (
  <div className="flex w-full items-center justify-center h-full bg-[#fff]">
    {children}
  </div>
);
  
  export default CenteredLayout;
