import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import FeedbackForm from "../feedback/FeedbackForm";

import PageHeading from "../PageHeading";
import Pattern from "../Pattern";

export default function Header() {
  const addItemToList = useFeedbackItemsStore((state) => state.addItemToList);

  return (
    <header>
      <Pattern />
      <PageHeading />
      <FeedbackForm onAddToList={addItemToList} />
    </header>
  );
}