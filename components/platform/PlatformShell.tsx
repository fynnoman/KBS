import PlatformNav from "./PlatformNav";
import PlatformFooter from "./PlatformFooter";

type Props = {
  children: React.ReactNode;
};

export default function PlatformShell({ children }: Props) {
  return (
    <>
      <PlatformNav />
      <main>{children}</main>
      <PlatformFooter />
    </>
  );
}
