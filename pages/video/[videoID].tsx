import { useRouter } from "next/router";
import SingleVideoContainer from "../../components/SingleVideoContainer";

const SingleVideoPage = (): React.ReactElement => {
  const router = useRouter();

  const videoID = router.query.videoID as string;
  const isReady = router.isReady;
  return <SingleVideoContainer key={videoID} />;
};

export default SingleVideoPage;
