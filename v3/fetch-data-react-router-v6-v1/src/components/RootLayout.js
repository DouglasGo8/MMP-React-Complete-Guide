import MainNavigation from "./MainNavigation";

/**
 * @param {*} param0
 * @returns
 */
const RootLayout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main>{children}</main>
    </>
  );
};

export default RootLayout;
