import { useState } from 'react';
import './AccordionComponent.css';

export type Topic = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  topics: Topic[];
};

export function AccordionComponent({ topics }: Props) {
  const [currentDetail, setCurrentDetail] = useState(0);
  function handleClick(detail: number): void {
    setCurrentDetail(detail);
    if (currentDetail === detail) {
      setCurrentDetail(0);
    }
  }
  const topicList = topics.map((i) => (
    <AccordionDetails topic={i} detail={currentDetail} onClick={handleClick} />
  ));
  return topicList;
}

type AccordionDetailsProps = {
  topic: Topic;
  detail: number;
  onClick: (detail: number) => void;
};

function AccordionDetails({ topic, detail, onClick }: AccordionDetailsProps) {
  return (
    <div className="accordion">
      <h3 className="topic" onClick={() => onClick(topic.id)}>
        {topic.title}
      </h3>
      <p
        className="details"
        style={{ display: topic.id === detail ? '' : 'none' }}>
        {topic.content}
      </p>
    </div>
  );
}
