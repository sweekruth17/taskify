import Footer from "./_components/Footer";
import Navbar from "./_components/Navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full bg-slate-100">
      <Navbar />
      <div className="pt-40 pb-20 bg-inherit"> {children}</div>
      <Footer />
    </div>
  );
};
export default MarketingLayout;
