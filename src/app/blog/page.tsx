import ComingSoon from "../components/ComingSoon";

export default function Blog() {
  const isReady = false;

  if (!isReady) {
    return <ComingSoon />;
  }
}
